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
      <div className="m-8 w-11/12 h-32 bg-green-200 p-5">
        <h3>Project Title : {project.title}</h3>
        <p>{project.content}</p>
        <p>
          Posted By {project.authorFirstName} {project.authorLastName}
        </p>
        <p>{moment(project.createdAt.toDate()).calendar()}</p>
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
