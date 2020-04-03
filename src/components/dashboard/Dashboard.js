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
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
 
    return (
      <div className="grid grid-rows-3 grid-flow-col gap-4 h-screen mx-6 my-4">
        <div className="row-span-3 col-span-2 bg-gray-200">
          <ProjectList projects={projects} />
        </div>
        <div className="row-span-3 col-span-1 bg-gray-200">
          <Notifications />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state)
  return {
    projects: state.firestore.ordered.Projects,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Projects" }])
)(DashBoard);
