import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {

  
  const [submissions, setSubmissions] = useState([]);
  
  const [formData, setformData] = useState(
    {
      firstName : "",
      lastName : "", 
      emailAddress : "",
      city : "",
      state : "", 
      zipCode : ""
    }
  )
  
  function changeHandler(event){
    console.log(formData)
    setformData((prevData) => {
      return {
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }
  
  useEffect(() => {
    console.log(submissions);
  }, [submissions]);
  
  function submitHandler(e) {
    e.preventDefault();
    setSubmissions(prev => [...prev, { ...formData }]);
    setformData({
      firstName: "",
      lastName: "",
      emailAddress: "",
      city: "",
      state: "",
      zipCode: ""
    });
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={changeHandler}
            value={formData.firstName}
            className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 bg-white transition duration-150 ease-in-out"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={changeHandler}
            value={formData.lastName}
            className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 bg-white transition duration-150 ease-in-out"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            name="emailAddress"
            onChange={changeHandler}
            value={formData.emailAddress}
            className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 bg-white transition duration-150 ease-in-out"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={changeHandler}
            value={formData.city}
            className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 bg-white transition duration-150 ease-in-out"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="State"
            name="state"
            onChange={changeHandler}
            value={formData.state}
            className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 bg-white transition duration-150 ease-in-out"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Zip Code"
            name="zipCode"
            onChange={changeHandler}
            value={formData.zipCode}
            className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 bg-white transition duration-150 ease-in-out"
          />
        </div>
        <div>
          <button
            type="submit"
            onSubmit={submitHandler}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
