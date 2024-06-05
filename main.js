import { printMain } from './src/components/Main/Main'
import { printFooter } from './src/components/footer/footer';
import { printHeader } from './src/components/header/header';
import './style.css'


printHeader();

printMain();

printFooter();

const addBackToTopButton = () => {
    const button = document.createElement("button");
    button.id = "topButtom";
    button.textContent = "Back to Top";
    document.body.appendChild(button);
};

addBackToTopButton();

document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("topButtom");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
