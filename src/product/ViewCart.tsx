import useCartStore from "@/store/cart-store";
import useQuantityStore from "@/store/quantity-cart";

const ViewCart = () => {
  const { cart } = useCartStore();
  const { quantity, inc, dec } = useQuantityStore();
  return (
    <div className="bg-purple-600 text-white h-full py-16">
      {cart.length > 0 &&
        cart.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-2 mx-2 border-2 border-white gap-2"
          >
            <h1>Product: {info.name}</h1>
            <p>Cateogory: {info.category}</p>
            <div className="flex items-center gap-2">
              {" "}
              <button className="bg-black text-white px-4" onClick={inc}>
                +
              </button>
              {quantity}
              <button className="bg-black text-white px-4" onClick={dec}>
                -
              </button>
            </div>
            <p>Price: {info.price * quantity}</p>
          </div>
        ))}
    </div>
  );
};

export default ViewCart;
