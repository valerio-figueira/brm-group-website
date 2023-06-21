import { createSpanTagIcon, createAnchor } from "../Utils/Functions.js";

export default function setCopyrightAndDevInfo(){
    const container = document.querySelector(".copyright");
    const year = new Date().getFullYear();

    container.innerHTML = `BRM Group - Direitos autorais &copy; ${year}`;

    const developerTag = document.querySelector(".dev-info");

    const anchor = createAnchor("Valerio Figueira", "https://valerio-figueira.github.io/portfolio/");
    const icon = createSpanTagIcon("fa fa-external-link-square");

    developerTag.innerHTML = `Desenvolvido por `;
    
    anchor.prepend(icon);
    developerTag.appendChild(anchor);


    const portfoliumLink = document.querySelector(".dev-info a");

    portfoliumLink.addEventListener("mouseout", () => {
        portfoliumLink.firstElementChild.style.display = "none";
    })

    portfoliumLink.addEventListener("mouseenter", () => {
        portfoliumLink.firstElementChild.style.display = "inline";
    })
}