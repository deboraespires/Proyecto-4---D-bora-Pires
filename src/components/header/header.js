import "./header.css"

const fillHeader = () => {
    return `
    <button data-target="#about-me">ABOUT ME</button>
    <button data-target="#education">EDUCATION</button>
    <button data-target="#experience">EXPERIENCE</button>
    <button data-target="#projects">RECENT PROJECTS</button>
    `
}

export const printHeader = () => {
    const header = document.createElement("header");
    header.innerHTML = fillHeader();
    const container = document.getElementById("app");
    container.appendChild(header);

    header.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        });
    });
}
