import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../../feature/CartSlice";
import CartItem from "./CartItem";
// import { Navigate } from "react-router";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();


  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const cartData =
    items.length &&
    items.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        productName={item.name}
        productIMG={item.imageSrc}
        productPrice={item.price}
        productQuantity={item.quantity}
        ProductshortDesc={item.imageAlt}
      />
    ));
  return (
    <div>
      <h1 className="flex-none text-dark font-bold mx-5">Shopping cart</h1>
      {totalQuantity?<div className="flex justify-between flex-wrap gap-10 ">
        <div className=" pointer-events-auto w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll-hidden bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="flex items-start justify-between"></div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul className="my-6 divide-y divide-gray-200">
                    {cartData}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="border-t border-gray-200 px-4 py-4 sm:px-6 rounded w-screen max-w-md"
          style={{ background: "rgba(229, 231, 235,0.2)" }}
        >
          <h1 className="pb-2 text-black font-medium">Order summary</h1>
          <div className="flex justify-between border-t border-gray-200 p-2">
            <p className="text-sm text-gray-700">Subtotal</p>
            <p>{totalAmount}</p>
          </div>
          <div className="flex justify-between  border-t border-gray-200 p-2">
            <p className="text-sm text-gray-700">Shipping estimate</p>
            <p>{0}</p>
          </div>
          <div className="flex justify-between border-t border-gray-200 p-2">
            <p className="text-sm text-gray-700">Tax estimate</p>
            <p>18%</p>
          </div>
          <div className="flex justify-between border-t border-gray-200 p-2">
            <p className="text-sm text-gray-700">Total quantity</p>
            <p>{totalQuantity}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900 border-t border-gray-200 p-2">
            <p>Order Total</p>
            <p>{totalAmount}</p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 w-full py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            onClick={() => dispatch(checkout())}
          >
            Checkout
          </button>
        </div>
      </div>:
      <div className="flex justify-center items-center flex-col gap-y-4">
      <h1 className="text-dark font-bold mx-5">Your cart is empty</h1>
      <Link  to="/" className="py-2 px-3 text-white text-sm font-md bg-black rounded-md shadow-md hover:scale-95">Continue Shopping</Link>
      </div>}
    </div>
  );
};
export default Cart;
