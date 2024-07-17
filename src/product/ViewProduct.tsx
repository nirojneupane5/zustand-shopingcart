import { product } from "./product";
const ViewProduct = () => {
  return (
    <div className="max-w-[1320px] mx-auto">
      {product &&
        product.map((info, index) => (
          <div key={index}>
            <h1>{info.name}</h1>
          </div>
        ))}
    </div>
  );
};

export default ViewProduct;
