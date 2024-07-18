import useCartStore from "@/store/cart-store";


const ViewCart = () => {
  const { cart, quantity, inc, dec } = useCartStore();

  return (
    <div className="bg-purple-600 text-white h-full py-16 flex flex-col gap-3">
      {cart.length > 0 ? (
        cart.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-2 mx-2 border-2 border-white gap-2"
          >
            <h1>Product: {info.name}</h1>
            <p>Cateogory: {info.category}</p>
            <div className="flex items-center gap-2">
              {" "}
              <button
                className="bg-black text-white px-4"
                onClick={() => inc(info.id)}
              >
                +
              </button>
              {quantity}
              <button
                className="bg-black text-white px-4"
                onClick={() => dec(info.id)}
              >
                -
              </button>
            </div>
            <p>Price: {info.price * quantity}</p>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-bold capitalize">No item in cart</h1>
        </div>
      )}
    </div>
  );
};

export default ViewCart;
