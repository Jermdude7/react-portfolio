import React from "react";
import projects from "./projects.json";
import "./Project.css";

export default function Project() {
  return projects.map((proj) => (
    <div class="card">
      <img src={require(`../../assets/project-previews/${proj.image}`)} class="card-img-top" alt={proj.title} />
      <div class="card-body">
        <h5 class="card-title">{proj.title}</h5>
        <a href={proj.repo} class="btn btn-primary" id="button">
          GitHub Repo
        </a>
        <a href={proj.live} class="btn btn-primary" id="button">
          Deployed Site
        </a>
      </div>
    </div>
  ));
}
