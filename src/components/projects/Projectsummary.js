import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div
      className="w-full h-full bg-white rounded-lg shadow-xs px-10 py-5 mb-4 "
      key={project.id}
    >
      <h2 className="text-black">{project.title}</h2>
      <p className="text-gray-900">
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
};

export default ProjectSummary;
