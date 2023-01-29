








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

if(path.match("/index.html")){
    setIntroductionText();
}


function setIntroductionText(){
    const container = document.querySelectorAll(".about-container .box");

    container[0].children[1].innerHTML = `
    A BRM Group foi criada pela necessidade de estruturar nossas <span class="destaque">soluções digitais</span> desenvolvidas para os clientes. A criação deste grupo forma um sólido conjunto de empresas que prezam pela <span class="destaque">qualidade dos serviços</span> e <span class="destaque">suporte ao cliente</span>. Garantimos a entrega de serviços individualizados e personalizados para cada tipo de organização. Nossa equipe fornece soluções digitais que trazem melhor experiência ao usuário. Somos focados em nossos clientes, no suporte e na qualidade de serviços prestados. Conte com a BRM Group para o sucesso de seu negócio.
    `;

    container[1].children[1].innerHTML = `
    Somos formados por princípios de integridade, ética e respeito ao ser humano. Por este motivo, estamos todos compromissados com estes valores. Nossos serviços são reconhecidos pela <span class="destaque">qualidade</span>, <span class="destaque">segurança</span> e <span class="destaque">agilidade</span> ao cliente. A BRM Group é composta por especialistas renomados na área de tecnologia, soluções digitais e contabilidade. Desenvolvemos aplicações que dão segurança e que supram aos interesses de nossos clientes.
    `;
}




setCopyright()
function setCopyright(){
    const container = document.querySelector(".copyright");
    const year = new Date().getFullYear();

    container.innerHTML = `BRM Group - Direitos autorais &copy; ${year}`;
}