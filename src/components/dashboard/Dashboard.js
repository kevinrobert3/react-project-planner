import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/Projectlist";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class DashBoard extends Component {
  render() {
    //  console.log(this.props)
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="grid grid-rows-3 grid-flow-col gap-10 h-screen mx-6 my-4">
        <div
          className="row-span-3 col-span-4 bg-purple-100 px-6 py-6 overflow-y-auto"
          id="project-list"
        >
          <h3 className="text-xl py-3 text-gray-700 ml-10 ">
            Current projects
          </h3>
          <ProjectList projects={projects} />
        </div>
        <div className="row-span-3 col-span-2 bg-purple-100 p-6 pt-0 pb-20 rounded border border-gray-200">
          <h1 className="text-center text-lg py-3 text-gray-700">
            Notifications
          </h1>
          <Notifications notifications={notifications} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state)
  return {
    projects: state.firestore.ordered.Projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.Notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "Projects", orderBy: ["createdAt", "desc"] },
    { collection: "Notifications", limit: 20, orderBy: ["time", "desc"] }
  ])
)(DashBoard);
