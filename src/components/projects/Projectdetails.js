import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

function ProjectDetails(props) {
  const { project, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="m-8 w-3/4 h-auto bg-white shadow rounded-lg px-10 py-5 border border-gray-200">
        <h3 className="text-black text-lg">Project Title : {project.title}</h3>
        <p className="text-gray-900">{project.content}</p>
        <p>
          Added by{" "}
          <span className="text-teal-600">
            {project.authorFirstName} {project.authorLastName}
          </span>
        </p>
        <p className="text-gray-600">
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p className="text-center text-2xl m-10">Loading project..</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.Projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "Projects"
    }
  ])
)(ProjectDetails);
