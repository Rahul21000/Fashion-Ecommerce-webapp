// import "./App.css";
import Cart from "./components/Cart/Cart";
import WhisList from "./components/whislist/WhisList"
import Home from "./components/Home/Home";
import Profile from "./components/User/Profile";
import Navbar from "./components/Navbar";
import Address from "./components/User/Address";
import Signup from "./components/Signup";
import Signin from "./components/SignIn";
import Payment from "./components/payment/payment"
import Order from "./components/Order/Order";
import PageNotFound from "./components/PageNotFound";
import { useSelector } from "react-redux";

import ProductItem from "./components/Product/ProductItem"
import MoreProductDetails from "./components/Product/MoreProductDetails"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className=" w-full h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<PageNotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:itemID" element={<ProductItem/>}/>
          <Route exact path="/moreproduct_details/:id" element={<MoreProductDetails/>}/>
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/whislist" element={<WhisList />} />
          <Route exact path="/signup" element={<Signup />} />
          {isLoggedIn ? (
            <>
              <Route exact path="/me" element={<Profile />} />
              <Route exact path="/address" element={<Address />} />
              <Route exact path="/your_order" element={<Order />} />
              <Route exact path="/payment" element={<Payment />} />
            </>
          ) : (
            <><Route exact path="/signin" element={<Signin />} />
            <Route exact path="/me" element={<Signin />} />
            <Route exact path="/address" element={<Signin />} />
            <Route exact path="/your_order" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/payment" element={<Signup />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
