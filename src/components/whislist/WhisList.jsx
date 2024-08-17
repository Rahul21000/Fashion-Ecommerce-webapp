import { useSelector, useDispatch } from "react-redux";
import {useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Product from "../Home/Product";
import { removeFromWhisList,checkout} from "../../feature/WhisListSlice"
import { addToCart } from "../../feature/CartSlice";

const WhisList = () => {

 const dispatch = useDispatch();
 const navigate=useNavigate();

 const handleAddToCart=()=>{
  dispatch(checkout())
  
  setTimeout(()=>{
    dispatch(addToCart())
    navigate("/cart")
  },100)
 }

  const { items} = useSelector((state) => state.whislist);
  const whisListData =
    items.length &&
    items.map((item) => (<div className="flex" key={item.id}>
      <button onClick={() => dispatch(removeFromWhisList(item.id))} type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-900">
      <span className="absolute -inset-0.5"></span>
      <span className="sr-only">Close panel</span>
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
      <Link to={`/moreproduct_details/${item.id}`}>
       <Product
        productIMG={item.imageSrc}
        productName={item.name}
        productDescription={item.description}
        productPrice={item.price}
        productAlt={item.imageAlt}
      />
      </Link>
      </div>));
  return (
    <div className="bg-white mt-2">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 className="sr-only mx-auto">WhisList</h1>
      {items.length!==null?<div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {whisListData}
        </div>
        <div className="flex justify-center flex-wrap space-x-4">
        <div>
        <button
          type="button"
          className="px-4 py-2 rounded-md border border-transparent bg-black text-base font-medium text-white shadow-sm hover:bg-gray-800 hover:scale-95"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
        </div>
        <div>
        <button
          type="button"
          className="px-4 py-2 rounded-md border border-transparent bg-black text-base font-medium text-white shadow-sm hover:bg-gray-800 hover:scale-95"
          onClick={()=>dispatch(checkout())}
        >
          Remove Whislist
        </button>
   </div>
   </div>
      </div>

      :
      <div className="flex justify-center items-center flex-col gap-y-4">
    <h1 className="text-dark font-bold mx-5">Whislist is empty</h1>
    <button className="py-2 px-3 text-white text-sm font-md bg-black rounded-md shadow-md hover:scale-95" onClick={()=>navigate("/")}>Continue Shopping</button>
    </div>} 
    </div>
  </div>
 
  );
};
export default WhisList;




    