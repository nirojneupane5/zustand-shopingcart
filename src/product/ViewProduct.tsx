import { useState } from "react";
import useCartStore from "@/store/cart-store";
import { product } from "./product";
import { ShoppingCart } from "lucide-react";
import ViewCart from "./ViewCart";
const ViewProduct = () => {
  const { addToCart, cart } = useCartStore();
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const handleCart = () => {
    setCartOpen(!cartOpen);
  };
  return (
    <div className="max-w-[1400px] mx-auto flex">
      <div className="flex-1 py-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-black font-bold text-center">
            List of Products
          </h1>
          <button onClick={handleCart}>
            <ShoppingCart />
            Store {cart.length}
          </button>
        </div>
        <div
          className={`grid ${
            cartOpen ? "grid-cols-2" : "grid-cols-3"
          } items-center gap-4 py-4`}
        >
          {product &&
            product.map((info, index) => (
              <div
                key={index}
                className="bg-yellow-400 py-4 px-4 rounded-md hover:bg-yellow-500 duration-200 ease-in-out"
              >
                <h1 className="text-2xl font-bold">
                  Product Name: {info.name}
                </h1>
                <p>{info.description}</p>
                <p className="text-xl font-semibold text-green-700">
                  Price: Rs {info.price}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-green-700 font-semibold text-lg">
                    Stock: {info.stock}
                  </p>
                  <p className="text-base font-semibold text-blue-500">
                    Category: {info.category}
                  </p>
                </div>
                <button
                  className="bg-black text-white px-4 py-2"
                  onClick={() => addToCart(info)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>

      {cartOpen && (
        <div
          className={`h-screen w-[250px] duration-200 ease-in-out overflow-hidden`}
        >
          <ViewCart />
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
