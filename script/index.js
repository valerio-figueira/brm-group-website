import sendMail from "./SendMail.js";
import createServiceBox from "./ServicesContent.js";
import createIntroductionText from "./CreateIntroduction.js";
import CheckInput from "./CheckInput.js";
import CheckForm from "./CheckForm.js";
import MailMessage from "./MailMessage.js";

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
    
        openNav.addEventListener("click", () => addConditionalNavbar(nav));
    
        closeNav.addEventListener("click", () => addConditionalNavbar(nav));
    }
    
    function addConditionalNavbar(nav){
        if(!nav.matches(".mobile")){
            nav.classList.add("mobile");
        } else{
            nav.classList.remove("mobile");
        }
    }
    
    
    // SET INTRODUCTION CONTENT
    if(document.querySelector(".about-container")) createIntroductionText();

    // SET SERVICES CONTENT
    const services = document.querySelector("#services");
    if(services) createServiceBox(services);
    
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
        const form = document.querySelector("#contact-form");
        const nameInput = document.querySelector("#nome");
        const emailInput = document.querySelector("#email");
        const messageInput = document.querySelector("#message");
        const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/u;
        const emailRegex = /^[a-zA-Z0-9@._-]$/;
    
        if(nameInput) {
            const checkNameInput = new CheckInput(nameInput, nameRegex, 40);
            checkNameInput.validate();
        }

        if(emailInput) {
            const checkEmailInput = new CheckInput(emailInput, emailRegex, 40);
            checkEmailInput.validate();
        }
    
        // ADD LISTENER TO CONTACT FORM
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            MailMessage.deleteMessage();

            const checkForm = new CheckForm(nameInput, emailInput, messageInput);
            const isValid = checkForm.validate();
    
            let mail = new FormData(form);
    
            // SEND ELETRONIC MAIL AS MULTIPART/FORMDATA
            if(isValid) sendMail(mail);
            else MailMessage.createMessage('Verifique seus dados ou mensagem', 'warning-msg');
        })
    }
}