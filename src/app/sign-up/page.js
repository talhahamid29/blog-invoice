"use client";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9000/api/signup/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message, "signup");
        window.location.href = "/auth";
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-100 rounded"
      style={{ overflowY: "scroll", scrollbarColor: "white white", scrollbarWidth: "thin", height: "100vh" }}>
      <form className="bg-white p-8 shadow-md w-96 rounded" onSubmit={handleSubmit} style={{ width: 500 }}>
        <br />
        <h4 className="text-2xl mb-4">
          <b>Create your account</b>
        </h4>
        <p style={{ fontFamily: "sans-serif", color: "gray" }}>Enter your personal details to create account</p>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <div className="flex">
            <input
              type="text"
              id="firstName"
              name="firstname"
              className="border rounded w-full p-2 mr-2"
              onChange={handleChange}
              placeholder="First Name"
            />
            <input type="text" id="lastName" name="lastname" className="border rounded w-full p-2" onChange={handleChange} placeholder="Last Name" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input type="text" id="email" name="email" className="border rounded w-full p-2" onChange={handleChange} placeholder="Test@gmail.com" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input type="password" id="password" name="password" className="border rounded w-full p-2" onChange={handleChange} placeholder="******" />
        </div>
        <div>
          <input type="checkbox" />
          Agree with <b>Privacy Policy</b>
          <br />
          <br />
        </div>
        <button type="submit" className="bg-gray-900 text-white rounded py-2 px-4 hover:bg-blue-600" style={{ width: 435 }}>
          Create Account
        </button>
        <div className="flex">
          <b>
            <br />
            Or signup with
            <br />
            <br />
          </b>
          <hr />
        </div>
        <div className="flex">
          <button className="bg-gray-200 rounded py-2 px-4 hover:black">
            <b>in </b>LinkedIN
          </button>
          <button className="bg-gray-200 rounded py-2 px-4 hover:black ml-5">
            <b>t </b>twitter
          </button>
          <button className="bg-gray-200 rounded py-2 px-4 hover:black ml-5">
            <b>f </b>Facebook
          </button>
        </div>
        <div className="flex">
          <p className="text-gray-500">
            <br />
            already have account
          </p>
          <b>
            <br />
            <a href="/auth">Sign In</a>
          </b>
        </div>
      </form>
    </div>
  );
};

export default Page;
