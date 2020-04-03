/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <NavLink to="./signup">
        <div className="inline-block text-sm mr-4 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
          Sign Up
        </div>
      </NavLink>
      <NavLink to="./signin">
        <div className="inline-block text-sm px-6 py-3 ml-8 mr-4 leading-none rounded text-white bg-teal-400 hover:bg-teal-500 mt-4 lg:mt-0">
          Login
        </div>
      </NavLink>
    </div>
  );
};

export default SignedOutLinks;
