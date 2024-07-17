import useCartStore from "@/store/cart-store";
import { product } from "./product";

const ViewProduct = () => {
  const { addToCart, cart } = useCartStore();

  return (
    <div className="max-w-[1320px] mx-auto py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-black font-bold text-center">
          List of Products
        </h1>
        <button className="">Store</button>
      </div>
      <div className="grid grid-cols-3 items-center gap-4 py-4">
        {product &&
          product.map((info, index) => (
            <div
              key={index}
              className="bg-yellow-400 py-4 px-4 rounded-md hover:bg-yellow-500 duration-200 ease-in-out"
            >
              <h1 className="text-2xl font-bold">Product Name: {info.name}</h1>
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
      {cart.length > 0 &&
        cart.map((info, index) => <div key={index}>{info.name}</div>)}
    </div>
  );
};

export default ViewProduct;
