import sendMail from "./SendMail.js";
import createServiceBox from "./ServicesContent.js";
import createIntroductionText from "./CreateIntroduction.js";

document.body.style.overflowY = "hidden";
window.addEventListener('load', loadedContent);

function loaderFadeOut(){
    document.querySelector(".loader-wrapper").style.opacity = "0";
    document.body.style.overflowY = "scroll";
    setTimeout(() => {
        document.querySelector(".loader-wrapper").style.display = "none";
    }, 500)
}


function loadedContent(){
    loaderFadeOut();

    setResponsiveNavbar();

    function setResponsiveNavbar(){
        const openNav = document.querySelector(".mobile-btn");
        const closeNav = document.querySelector(".close-btn");
        const nav = document.querySelector(".navbar");
    
        openNav.addEventListener("click", () => {
            addConditionalNavbar(nav);
        })
    
        closeNav.addEventListener("click", () => {
            addConditionalNavbar(nav);
        })
    }
    
    function addConditionalNavbar(nav){
        if(!nav.matches(".mobile")){
            nav.classList.add("mobile");
        } else{
            nav.classList.remove("mobile");
        }
    }
    
    
    // SET INTRODUCTION CONTENT
    if(document.querySelector(".about-container")){
        createIntroductionText();
    }
    // SET SERVICES CONTENT
    const services = document.querySelector("#services");
    if(services){
        createServiceBox(services);
    }
    
    // SET FOOTER CONTENT
    setCopyrightAndDevInfo();
    
    
    function setCopyrightAndDevInfo(){
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
    
    function createSpanTagIcon(iconString){
        const icon = document.createElement("span");
        icon.className = iconString + " icon";
        icon.style.margin = "0 .3rem";
    
        return icon;
    }
    
    function createAnchor(string, url){
        const anchor = document.createElement("a");
        anchor.innerHTML = string;
        anchor.href = url;
        anchor.rel = "external";
        anchor.target = "_blank";
    
        return anchor;
    }
    
    
    
    
    
    if(document.querySelector("#contact")){
        const nameInput = document.querySelector("#nome");
        const regex = /[0-9]/;
        const redColor = "#ffcece";
        const whiteColor = "#FFFFFF";
    
        // name form validation
        nameInput.addEventListener('keypress', (e) => {
            if(e.target.value.length > 40){
                e.preventDefault();
            }
            if(regex.test(e.key)){
                e.preventDefault();
                nameInput.style.backgroundColor = redColor;
            }
        })
        nameInput.addEventListener("focusout", (e) => {
            e.target.style.backgroundColor = whiteColor;
        })
    
        // emmail form validation
        const emailInput = document.querySelector("#email");
    
        emailInput.addEventListener('keypress', (e) => {
            if(e.target.value.length > 40){
                e.preventDefault();
            }
        })
    
        emailInput.addEventListener("focusout", (e) => {
            e.target.style.backgroundColor = whiteColor;
        })
    
    
    
        const form = document.querySelector("#contact-form");
    
        // ADD LISTENER TO CONTACT FORM
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            let mail = new FormData(form);
    
            // SEND ELETRONIC MAIL AS MULTIPART/FORMDATA
            sendMail(mail);
        })
    
    }
}
