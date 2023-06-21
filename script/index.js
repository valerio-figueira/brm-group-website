import sendMail from "./services/SendMail.js";
import createServiceBox from "./services/CreateServiceBox.js";
import createIntroductionText from "./services/CreateIntroduction.js";
import CheckInput from "./validation/CheckInput.js";
import CheckForm from "./validation/CheckForm.js";
import MailMessage from "./services/CreateMailMessage.js";
import setCopyrightAndDevInfo from "./services/CreateFooter.js";
import makeNavResponsive from "./services/MakeNavResponsive.js";

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

    makeNavResponsive();
    
    // SET INTRODUCTION CONTENT
    if(document.querySelector(".about-container")) createIntroductionText();

    // SET SERVICES CONTENT
    const services = document.querySelector("#services");
    if(services) createServiceBox(services);
    
    // SET FOOTER CONTENT
    setCopyrightAndDevInfo();
    
    // CONTACT FORM CONFIG
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