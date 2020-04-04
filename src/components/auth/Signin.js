import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="w-1/2 bg-gray-200 mt-16 ml-56 p-10">
        <form onSubmit={this.handleSubmit} className="">
          <h4 className="text-gray-700 text-center mb-6 text-2xl">Sign In</h4>

          <div className="flex flex-col">
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
              Login
            </button>

            {authError ? <p className="text-red-500 ">{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
