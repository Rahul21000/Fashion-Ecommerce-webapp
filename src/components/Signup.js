import { useState } from "react";
import {signUpRequest} from "../feature/AuthSlice"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Signup = () => {
  const dispatch=useDispatch();
  const [inputField, setInputField] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [error, setError] = useState({});
  const handleOnChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  console.log(inputField);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isValidate()) {
    const handleFetchAPI=async()=>{
        try{
          const response=await fetch('api/signup',{
            method:'POST',
            header:{'Content-Type':'application/json'},
            body:JSON.stringify(inputField)
          });
          const data=await response.json();
          dispatch(signUpRequest({token:data.token}))

        }
        catch(error){
          console.log(error.message);
        }
    }
    handleFetchAPI();
    } else {
      console.log("input field not validate");
      console.log(error);
    }
  };

  function isValidate() {
    const newError = {};
    if (/[^A-Za-z]/.test(inputField.firstname)) {
      newError.fullname = "name must be valid";
    } else if (/[^A-Za-z]/.test(inputField.lastname)) {
      newError.fullname = "name must be valid";
    } 
     else if (inputField.password!== inputField.cpassword) {
      newError.cpassword = "password does not match";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="/logo192.png" alt="Your Company"/>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
    </div>
    <p className="mt-2 text-center text-sm text-gray-500">
        <span>Already a user?</span>
        <Link to="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in</Link>
      </p>
    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-2" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div className="mt-1">
            <span className="text-sm text-red-900">{error.firstname&&error.firstname}</span>
            <input id="name" name="fullname" type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6" value={inputField.firstname} onChange={handleOnChange}/>
          </div>
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div className="mt-1">
            <span className="text-sm text-red-900">{error.lastname&&error.lastname}</span>
            <input id="name" name="lastname" type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6" value={inputField.lastname} onChange={handleOnChange}/>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-1">
            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6" value={inputField.email} onChange={handleOnChange}/>
          </div>
        </div>
         <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" >Password</label>
            <div className="mt-1">
            <input id="password" name="password" type="password" minLength={6} autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6" value={inputField.password} onChange={handleOnChange}/>
          </div>
        </div>
         <div>
            <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900" >Confirm password</label>
            <div className="mt-1 mb-4">
            <span className="text-sm text-red-900">{error.cpassword&&error.cpassword}</span>
            <input id="cpassword" name="cpassword" type="password" minLength={6} autoComplete="current-password" required className={inputField.password===inputField.cpassword?"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6":"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"} value={inputField.cpassword} onChange={handleOnChange}/>
          </div>
        </div>
  
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black-900 hover:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600">Sign up</button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default Signup;
