import React from "react";
function ProjectCard({ project }) {
  return (
    <article className="col-md-6 col-lg-4">
      <div className="project-card card h-100">
        <div className={`project-visual ${project.visualClass}`}>
          <span>{project.number}</span>
        </div>
        <div className="project-card-content card-body">
          <span className="category-label">{project.categoryLabel}</span>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="tag-list d-flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
