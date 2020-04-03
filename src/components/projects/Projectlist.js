import React from "react";
import ProjectSummary from "./Projectsummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  //console.log(projects)
  return (
    <div className=" bg-gray-100 p-8 m-3">
     
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project} key={project.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
