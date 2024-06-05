import data from "../../../data/data";
import "./projects.css"

const fillProjects = () => {
    return `
    <section id="projects" class="projectSection">
      <h2>Recent Projects</h2>
      <ul>
        ${data.projects.map((project) => `
        <li class="project">
          <img src=${project.preview} alt=${project.title}/>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href=${project.link}>Know more...</a>
        </li>
        `
          ).join("")}
      </ul>
    </section>
    `;
  };

export const createProjects = () => {
   return fillProjects();
}