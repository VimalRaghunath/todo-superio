import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Todoimage from "../src/assets/Todologin.jpg"
import axios from "axios";
import { Data } from "./App";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const { logindetails, setLogindetails } = useContext(Data);

  const handleRegister = async (e) => {
    e.preventDefault();
  };

  const handleClick = async () => {
    setLoading(true);

    if (!name || !email || !password) {
      alert("Please enter all fields");
    } else {
      try {
        const res = await axios.post("http://localhost:5000/api/user/", {
          name,
          email,
          password,
        });

        setLogindetails(res.data);
        localStorage.setItem("token", res.data.token);
        alert("Account created Successfully");
        navigate("/");
      } catch (error) {
        console.error("Registration Failed:", error);
        alert("Registration Failed. Please try again.");
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
            <form onSubmit={handleRegister} className="w-full">
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-300 text-black"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="text"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-300 text-black"
                  placeholder="Enter your email"
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
                  placeholder="Enter a password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="password"
                >
                  Confirm Password
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-300 text-black"
                  placeholder="Confirm password"
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  type="password"
                  id="password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-black-200"
                onClick={handleClick}
                isLoading={loading}
              >
                Register
              </button>
            </form>
            <div className="mt-4 text-center text-blue-600 font-bold">
              <h3>
                Already have an account?{" "}
                <a className="text-black font-bold hover:underline" href="/">
                  {" "}
                  Sign In{" "}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
