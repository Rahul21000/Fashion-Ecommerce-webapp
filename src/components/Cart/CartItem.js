import { useDispatch } from "react-redux";

import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../feature/CartSlice";

const CartItem = ({ id, productTitle,productImg, productPrice, productQuantity,ProductshortDesc }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex py-6 border-t border-gray-200 px-4 sm:px-6">
    <div className="h-48 w-36 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img src={productImg} alt={ProductshortDesc} className="h-full w-full object-cover object-center"/>
    </div>

    <div className="ml-4 flex flex-1 flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="#">{productTitle}</a>
          </h3>
          <p className="ml-4">{productPrice}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">Salmon</p>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">Qty {productQuantity}</p>
      <button type="button" className="rounded  border border-gray-200 sm:p-1" onClick={() => dispatch(incrementQuantity({ id }))}>+</button>
        <button type="button" className="rounded p-1 border border-gray-200 sm:p-1" onClick={() => dispatch(decrementQuantity({ id }))}>-</button>

        <div className="flex">
          <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => dispatch(removeFromCart({ id }))}>Remove</button>
        </div>
      </div>
    </div>
    <div className="ml-3 flex h-7 items-center">
<button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
  <span className="absolute -inset-0.5"></span>
  <span className="sr-only"onClick={() => dispatch(removeFromCart({ id }))}>Close panel</span>
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
</div>
  </li>


  );
};
export default CartItem;
