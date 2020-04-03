import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div
      className="w-full h-24 bg-red-300 rounded shadow p-4 mb-4"
      key={project.id}
    >
      <h2 className="text-gray-900">Project Title : {project.title}</h2>
      <p>
        Posted by {project.authorFirstName} {project.authorLastName}
      </p>
      <p className="text-gray-700">3rd September 2020, 3pm</p>
    </div>
  );
};

export default ProjectSummary;
