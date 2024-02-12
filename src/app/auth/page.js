"use client"
import React from "react";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
     try {
      const response = await fetch("http://localhost:9000/api/signin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Login successful");
        const tokens = localStorage.setItem("token", "session");
          window.location.href = "/invoice";
      } else {
        console.error("Login failed:", data.message);
        window.location.href = "/auth";
        alert("Incorrect Credentails")
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };


  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-100 rounded"
      style={{
        overflowY: "scroll",
        scrollbarColor: "white white",
        scrollbarWidth: "thin",
        height: "100vh",
      }}
    >
      <form
        className="bg-white p-8 shadow-md w-96 rounded"
        onSubmit={handleLogin}
        style={{ width: 500 }}
      >
        <br />
        <h4 className="text-2xl mb-4">
          <b>Sign in to account</b>
        </h4>
        <p style={{ fontFamily: "sans-serif", color: "gray" }}>
          Enter your email & password to login
        </p>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="Test@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="******"
          />
        </div>
        <div className="flex">
          <input type="checkbox" />
          <p>Remember paasword</p>
          <b style={{ marginLeft: 100 }}>Forget password</b>
          <br />
          <br />
        </div>
        <button
          type="submit"
          className="bg-gray-900 text-white rounded py-2 px-4 hover:bg-blue-600"
          style={{ width: 435 }}
        >
          Sign in
        </button>
        <div className="flex">
          <b>
            <br />
            Or sign in with
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
            Dont have account
          </p>
          <b>
            <br />
            <a href="/signup"> Create account</a>
          </b>
        </div>
      </form>
    </div>
  );
};

export default Page;
