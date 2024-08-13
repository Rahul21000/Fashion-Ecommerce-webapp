import { useState } from "react";

const Profile = () => {
  const [file, setFile] = useState();

  const [inputField, setInputField] = useState({firstname:"",lastname:"",email:"",mobile:"", });
  const [error, setError] = useState({});
  const handleOnChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isValidate()) {
     const handleFetchAPI=async()=>{
      try{
        const response=await fetch('api/user/profile',{
          method:'POST',
          header:{'Content-Type':'application/json'},
          body:JSON.stringify(inputField)
        })
        const result =await response.json();

      }catch(error){
        console.log(error.message);
      }
     }
     handleFetchAPI();
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
  <img className="mx-auto h-20 w-20 rounded-full border border-black border-w-4" src={file} alt={file}/>
    <form className="space-y-6" onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="image" className="block mx-auto text-sm font-medium leading-6 text-gray-900">Photo</label>
        <div className="mt-2">
          <input id="image" name="Photo" type="file" className="block w-auto rounded-md  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={inputField.image} onChange={(e)=>setFile(URL.createObjectURL(e.target.files && e.target.files[0]))}/>
        </div>
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
        <div className="mt-2">
          <input id="name" name="firstname" type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={inputField.firstname} onChange={handleOnChange}/>
        </div>
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
        <div className="mt-2">
          <input id="name" name="lastname" type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={inputField.lastname} onChange={handleOnChange}/>
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={inputField.email} onChange={handleOnChange}/>
        </div>
      </div>
      <div>
        <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
        <div className="mt-2">
          <input id="mobile" name="mobile" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={inputField.mobile} onChange={handleOnChange}/>
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

export default Profile;

