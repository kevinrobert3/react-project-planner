/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <div>
      <NavLink to="./create">
        <div className="inline-block text-sm px-6 py-3 ml-8 mr-4 leading-none rounded text-white bg-teal-400 hover:bg-teal-500 mt-4 lg:mt-0">
          New Project
        </div>
      </NavLink>
      <NavLink to="#">
        <div
          onClick={props.signOut}
          className="inline-block hover:cursor-pointer text-sm mr-4 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Log Out
        </div>
      </NavLink>

      <NavLink to="/">
        <div className="rounded-full text-white font-semibold text-base bg-red-400 h-20 p-4 inline ml-6 items-center">
          CM
        </div>
      </NavLink>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
