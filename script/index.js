import sendMail from "./SendMail.js";
import createServiceBox from "./ServicesContent.js";

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


const services = document.querySelector("#services");
if(services){
    createServiceBox(services);
}



// CREATE FIVE STAR SCORES
const path = location.pathname;
/*
if(path.match("/index.html")){
    const scoresContainer = document.querySelectorAll(".scores");

    scoresContainer.forEach(container => {
        createFiveStarScore(container);
    })
}
*/

function createFiveStarScore(container){
    const index = 5;

    for(let i = 0; i < index; i++){
        const span = document.createElement("span");
        span.className = "fa fa-star";
        container.appendChild(span);
    }

    return container;
}

if(document.querySelector(".about-container")){
    setIntroductionText();
}


function setIntroductionText(){
    const container = document.querySelectorAll(".about-container .box");

    container[0].children[1].innerHTML = `
    A BRM Group foi criada pela necessidade de estruturar nossas <span class="destaque">soluções digitais</span> desenvolvidas para os clientes. A criação deste grupo forma um sólido conjunto de empresas que preza pela <span class="destaque">qualidade dos serviços</span> e <span class="destaque">suporte ao cliente</span>. Produzimos softwares sob demanda e personalizados para cada tipo de organização. Nossa equipe fornece soluções digitais que trazem melhor experiência a você cliente. Somos focados em nossos clientes, no suporte e na qualidade de serviços prestados. Conte com a BRM Group para o sucesso de seu negócio.
    `;

    container[1].children[1].innerHTML = `
    Somos formados por princípios de integridade, ética e respeito ao ser humano. Nossos serviços são reconhecidos pela <span class="destaque">qualidade</span>, <span class="destaque">segurança</span> e <span class="destaque">agilidade</span> ao cliente. A BRM Group é composta por especialistas renomados na área de <span class="destaque">tecnologia</span>, <span class="destaque">soluções digitais</span> e <span class="destaque">contabilidade</span>. Desenvolvemos aplicações tecnológicas que dão segurança e que supram aos interesses de nossos clientes. Nós da <span class="destaque">BRM Group</span> temos amor pelo que fazemos.
    `;
}




setCopyrightAndDevInfo()
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