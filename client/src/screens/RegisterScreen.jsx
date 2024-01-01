import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <div className="container mx-auto mt-8 mb-28 p-4 max-w-md ">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="firstName" className="text-gray-700">
            FirstName:
          </label>
          <input
            type="text"
            id="firstName"
            className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-700">
            LastName:
          </label>
          <input
            type="text"
            id="lastName"
            className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="text-gray-700">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
        >
          Register
        </button>
        <button
          type="button"
          className="bg-red-600 text-white px-4 py-2 rounded-md mt-4 ml-3 hover:bg-red-700"
        >
          Sign up with Google
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Sign In
        </Link>
        .
      </p>
    </div>
  );
};

export default RegisterScreen;
