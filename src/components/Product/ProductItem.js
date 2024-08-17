import { useParams } from "react-router-dom";
import data from "../../api/productData.json"
import { useDispatch } from "react-redux";
import {addToCart} from "../../feature/CartSlice"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addToWhisList} from "../../feature/WhisListSlice"
const ProductItem = () => {
 const[changeText,setChangeText]=useState(false); 
 const dispatch=useDispatch();
 const navigate=useNavigate()
 const {itemID}=useParams();
 const dataItem= data.find((e)=>e.id===parseInt(itemID));
 const handleonAddToCardBuyClicked=()=>{
  dispatch(addToCart(dataItem));
  setTimeout(() => {
    navigate("/cart")
    }, 100);
}
 const handleonAddToCardClicked=()=>{
  setChangeText(true)
  dispatch(addToCart(dataItem));
}
    return (<>
   {itemID?<div className="w-64 font-sans bg-white border-2 rounded-md">
  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  lg:aspect-none group-hover:opacity-75 lg:h-60 relative">
          <img src={dataItem.imageSrc} alt={dataItem.imageAlt} className=" h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
  <form className="flex-auto p-2">
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-lg font-semibold text-slate-900">
        {dataItem.name}
      </h1>
      <div className="text-lg font-semibold text-slate-500">
        {dataItem.price}
      </div>
      <div className="w-full flex-none text-sm font-medium text-green-700 ">
        In stock
      </div>
    </div>
    <div className="flex items-baseline mb-1 border-b border-slate-200">
      <div className="space-x-2 flex text-sm">
        <label>
          <input className="sr-only peer" name="size" type="radio" value="xs" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white hover:bg-black hover:text-white">
            XS
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="s" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white hover:bg-black hover:text-white">
            S
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="m" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white hover:bg-black hover:text-white">
            M
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="l" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white hover:bg-black hover:text-white">
            L
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="xl" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white hover:bg-black hover:text-white">
            XL
          </div>
        </label>
      </div>
    </div>
    <div className="flex space-x-4 mb-0 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <button  className="h-10 px-4 font-semibold rounded-md bg-black text-white text-xs hover:scale-95" type="button" onClick={handleonAddToCardBuyClicked}>
          Buy now
        </button>
        <button onClick={handleonAddToCardClicked} className={changeText?"h-10 px-2 font-semibold rounded-md border border-slate-200 text-slate-900 text-xs hover:scale-95":"h-10 px-2 font-semibold rounded-md border border-slate-200 text-slate-900 text-xs hover:scale-95"} type="button">
         {changeText?"added":" Add to bag"}
        </button>
      </div>
      <button onClick={()=>dispatch(addToWhisList(dataItem))} className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200 hover:scale-95" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd"clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
  </form>
</div>
   :<h4 className="text-center text-black bg-white px-2 py-1 rounded-md">product not listed</h4>}
    </>)}
export default ProductItem;