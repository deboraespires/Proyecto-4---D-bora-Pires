import data from "../../../data/data"
import "./education.css"

const fillEducation = () => {
  return `
    <section id="education" class="educationSection">
      <h2>Education</h2>
      <div class="container">
      <h3>${data.education.degree}</h3>
      <h4>${data.education.university}</h4>
      <p>${data.education.graduationYear}</p>
      <p>${data.education.honors}</p>
      <h3>Relevant Courses</h3>
      <ul>
      ${data.education.relevantCourses.map((course) => `<li>${course}</li>`).join("")}
      </ul>
      </div>
    </section>
  `;
};

export const createEducation = () => {
    return fillEducation();
  }