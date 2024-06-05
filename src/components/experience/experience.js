import data from "../../../data/data"
import "./experience.css"

const fillExperience = () => {
  return `
    <section id="experience" class="experienceSection">
      <h2>Experience</h2>
      <ul>
      ${data.workExperience.map((item) => `
      <li class="experienceList">
        <p class="one">${item.startDate} - ${item.endDate}</p>
        <p class="two">${item.company}</p>
        <p class="three">${item.position}</p>
        <p>${item.description}</p>
      </li>
      `
        ).join("")}
    </ul>
    </section>
  `;
};

export const createExperience = () => {
    return fillExperience();
  }