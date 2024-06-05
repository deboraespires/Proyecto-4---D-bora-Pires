import data from "../../../data/data"
import "./about.css"

const fillAbout = () => {
  return `
    <section id="about-me" class="aboutSection">
      <h2>About me</h2>
      <div class="container">
      <img class="avatar" src=${data.avatar} alt=${data.name}/>
      <h2>${data.name}</h2>
      <p class="bold">${data.aboutMe}</p>
      <p>${data.address}</p>
      <a href=${`mailto:${data.email}>Contact me</a>`}
      </div>
      <div class="skillContainer">
      <p>Skills:</p>
      <ul class="skills">
      ${data.skills.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>
      </div>
    </section>
  `;
};

export const createAbout = () => {
  return fillAbout();
}