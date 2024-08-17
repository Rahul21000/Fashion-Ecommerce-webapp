import data from "../../api/productData.json";
import Product from "./Product";
import { Link } from "react-router-dom";

const ProductList = ({ title}) => {
  return (
    <div className="bg-white border border-gray-200 mt-1 shadow-md rounded-lg">
      <div className="mx-auto max-w-2xl px-4 py-8  sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
         {data.map(e=><Link to={`products/${e.id}`}><Product key={e.id} productID={e.id} productIMG={e.imageSrc} productName={e.name} productDescription={e.description} productPrice={e.price} ProductAlt={e.imageAlt}/></Link>)}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
