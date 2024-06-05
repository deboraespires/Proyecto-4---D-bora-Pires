import "./footer.css"

const fillFooter = () => {
    return '<h3>Proyecto 4 made by Débora Pires</h3>'
}

export const printFooter = () => {
    const footer = document.createElement("footer");
    footer.innerHTML = fillFooter();
    const container = document.getElementById("app");
    container.appendChild(footer);
}
