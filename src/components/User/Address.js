import { useState } from "react";

const Address = () => {
  const [inputField, setInputField] = useState({ houseno:"",area:"",district:"",state:"",country:"",pincode:"" });
  const [error, setError] = useState({});
  const handleOnChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isValidate()) {
      setInputField({ email: "", password: "" });
      console.log(
        `login successful${inputField.email + " " + inputField.password}`
      );
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
  <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm"> 
    <form className="space-y-6" onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="houseno" className="block text-sm font-medium leading-6 text-gray-900">House no/Building no</label>
        <div className="mt-2">
          <input id="houseno" name="houseno" type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={inputField.houseno} onChange={handleOnChange}/>
        </div>
      </div>
      <div>
        <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">Street name/Village</label>
        <div className="mt-2">
          <input id="street" name="street" type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={inputField.village} onChange={handleOnChange}/>
        </div>
      </div>
      <div>
        <label htmlFor="area" className="block text-sm font-medium leading-6 text-gray-900">Area/Locality</label>
        <div className="mt-2">
          <input id="area" name="area" type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={inputField.area} onChange={handleOnChange}/>
        </div>
      </div>
      <div>
        <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">District</label>
        <div className="mt-2">
          <input id="district" name="district" type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={inputField.district} onChange={handleOnChange}/>
        </div>
      </div>
      <div>
        <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">State</label>
        <div className="mt-2">
          <input id="state" name="state" type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={inputField.state} onChange={handleOnChange}/>
        </div>
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
        <div className="mt-2">
          <input id="country" name="country" type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={inputField.country} onChange={handleOnChange}/>
        </div>
      </div>
      <div>
        <label htmlFor="pincode" className="block text-sm font-medium leading-6 text-gray-900">Pin code</label>
        <div className="mt-2">
          <input id="pincode" name="pincode" type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={inputField.pincode} onChange={handleOnChange}/>
        </div>
      </div>
     
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:scale-95">Update</button>
      </div>
    </form>
  </div>
</div>

  );
};

export default Address;

