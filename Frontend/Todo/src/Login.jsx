import React, { useContext, useState } from "react";
import Todoimage from "../src/assets/Todologin.jpg"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Data } from "./App";

function Login() {
    
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const { logindetails, setLogindetails } = useContext(Data)
  

  const handleSignIn = (e) => {
    e.preventDefault();
  };
  
  const handleClick = async () => {
    setLoading(true);
    if (!email || !password) {
      alert("Please fill all the fields");
    } else {
      try {
        const res = await axios.post("http://localhost:5000/api/user/login", {
          email,
          password,
        });
        setLogindetails(res.data);
        localStorage.setItem('token',res.data.token)
        console.log(res);
        alert("Login Successful");
        navigate("/todohome");
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please try again.");
      }
    }
    setLoading(false);
  };
  

  return (
    <>
      <div className="bg-[url('../src/assets/todo.jpg')] bg-cover bg-center h-[43.4rem] w-full flex items-center justify-center text-white">
        <div className="p-6 rounded-lg sm:mx-auto sm:w-full sm:max-w-lg text-white">
          <div className="flex flex-col items-center">
            <img
              className="w-full h-auto mb-6"
              src={Todoimage}
              alt="Todologin.jpg"
            />
            <form className="w-full" onSubmit={handleSignIn}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-300 text-black"
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-300 text-black"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  required
                />
              </div>
              <button
                type="submit"
                onClick={handleClick}
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-black-200"
                isLoading={loading}
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 text-center text-black font-bold">
              <h3>
                Not a user?{" "}
                <a
                  className="text-blue-600 font-bold hover:underline"
                  href="/register"
                >
                  {" "}
                  Register{" "}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
