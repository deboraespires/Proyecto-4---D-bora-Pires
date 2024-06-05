import { createAbout } from "../about/about"
import { createEducation } from "../education/education"
import { createExperience } from "../experience/experience"
import { createProjects } from "../projects/projects"
import "./Main.css"

const createMain = () => {
    const main = document.createElement("main");
    const container = document.getElementById("app");
    container.appendChild(main);

    main.innerHTML += createAbout();
    main.innerHTML += createEducation();
    main.innerHTML += createExperience();
    main.innerHTML += createProjects();
}

export const printMain = () => {
    createMain();
}

