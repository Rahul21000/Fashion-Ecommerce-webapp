import {useState } from "react";
import {signInRequest} from "../feature/AuthSlice"
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"
const Signin = () => {
  const dispatch=useDispatch();
  const [inputField, setInputField] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const handleOnChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isValidate()) {
      // const handleFetchAPI=async()=>{
      //   try{
      //     const response=await fetch('api/signin',{
      //       method:'POST',
      //       header:{'Content-Type':'application/json'},
      //       body:JSON.stringify(inputField)
      //     })

      //     const data=await response.json();
      //     dispatch(signInRequest({token:data.token}))
      //   }
      //   catch(error){
      //     console.log(error.message);
      //   }
      // }
      // handleFetchAPI();
      dispatch(signInRequest());
      setInputField({ email: "", password: "" });
    } else {
      console.log(`error${error.username + " " + error.password}`);
    }
  };

  const isValidate = () => {
    const newError = {};
    if (!inputField.email.trim()) {
      newError.email = "username is require";
    } else if (!inputField.password.trim()) {
      newError.password = "password is require";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="/logo192.png" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>
  <p className="mt-2 text-center text-sm text-gray-500">
      <span>Not a member?</span>
      <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</Link>
    </p>
  <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleOnSubmit}>
      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={inputField.email} onChange={handleOnChange}/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-gray-900" >Password</label>
          <div className="text-sm">
            <p className="font-semibold text-black-600 hover:text-black-500">Forgot password?</p>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={inputField.password} onChange={handleOnChange}/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Sign in</button>
      </div>
    </form>
    <div className="flex justify-center items-center space-x-1 mt-4">
      <div className="bg-gray-200 w-full h-1"></div>
      <div className="flex-none text-sm text-gray-700 font-sm">Or continue with</div>
      <div className="bg-gray-200 w-full h-1"></div>
    </div>
    <div className="flex justify-center items-center space-x-4 mt-2">
      <div className="flex justify-center items-center space-x-2 border border-gray-200 px-4 rounded-md " >
        <div>google</div>
       <div> <img className="h-8 w-8 object-cover object-center" src="/Images/google.png" alt="google"/></div>
      </div>
      <div className="flex justify-cneter items-center space-x-2 border border-gray-200 px-4 py-1 rounded-md ">
        <div>facebook</div>
        <div><img className="h-6 w-6 object-cover object-center" src="/Images/facebook.png" alt="facebook"/></div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Signin;

