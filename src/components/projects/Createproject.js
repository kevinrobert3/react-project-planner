import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createProject(this.state);
  };
  render() {
    const {auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="w-1/2 bg-purple-200 mt-16 ml-56 p-10 rounded shadow">
        <form onSubmit={this.handleSubmit} className="">
          <h4 className="text-gray-700 text-center mb-6 text-2xl">
            Create a new project
          </h4>

          <div className="flex flex-col">
            <label htmlFor="title">Project Title</label>
            <input
              type="text"
              id="title"
              onChange={this.handleChange}
              placeholder="Enter Project Title"
              className="p-2 rounded border border-gray-200 w-3/4 mb-6 mt-2"
            ></input>

            <label htmlFor="content">Project Content</label>
            <textarea
              type="text"
              id="content"
              onChange={this.handleChange}
              placeholder="Enter Content"
              className="p-2 rounded border border-gray-200 w-3/4 mb-6 mt-2"
            ></textarea>

            <button className="px-6 py-2 bg-teal-400 border border-white w-40 rounded text-white hover:bg-teal-500">
              Create Project
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state)
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
