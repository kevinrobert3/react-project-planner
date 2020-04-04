import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {signUp} from '../../store/actions/authActions';


class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state)
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="w-3/5 bg-gray-200 mt-4 ml-56 py-5 px-10">
        <form onSubmit={this.handleSubmit} className="">
          <h4 className="text-gray-700 text-center mb-2 text-2xl">Sign Up</h4>

          <div className="flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              onChange={this.handleChange}
              placeholder="First Name"
              className="p-2 rounded border border-gray-200 w-3/4 mb-6 mt-2"
            ></input>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              onChange={this.handleChange}
              placeholder="Second Name"
              className="p-2 rounded border border-gray-200 w-3/4 mb-6 mt-2"
            ></input>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              placeholder="Enter Email"
              className="p-2 rounded border border-gray-200 w-3/4 mb-6 mt-2"
            ></input>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              placeholder="Enter Password"
              className="p-2 rounded border border-gray-200 w-3/4 mb-6 mt-2"
            ></input>
            <button className="px-6 py-2 bg-teal-400 border border-white w-32 rounded text-white hover:bg-teal-500">
              Sign Up
            </button>
            {authError ? <p className="text-red-500 text-center">{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
    auth: state.firebase.auth,
    authError:state.auth.authError
  };
};

const mapDispatchToProps=(dispatch)=>{
  return{
    signUp: (newUser)=> dispatch(signUp(newUser))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
