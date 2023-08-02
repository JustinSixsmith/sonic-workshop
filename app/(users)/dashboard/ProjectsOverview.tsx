import React from "react";

function ProjectsOverview() {
  // Replace with actual data
  const projects = [
    { id: 1, name: "Project 1", description: "This is Project 1" },
    { id: 2, name: "Project 2", description: "This is Project 2" },
    // ...
  ];

  return (
    <div className="mt-4 rounded bg-gray-200 p-4">
      <h2 className="text-xl font-bold">Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="mt-2">
          <h3 className="font-semibold">{project.name}</h3>
          <p>{project.description}</p>
          {/* Replace with actual link */}
          <a href={`/projects/${project.id}`}>View Project</a>
        </div>
      ))}
    </div>
  );
}

export default ProjectsOverview;
