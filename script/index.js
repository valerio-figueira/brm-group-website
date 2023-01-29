








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
    Honestidade, ética e respeito são princípios presentes na essência da BRM Group. Por este motivo, é fundamental que todos estejamos conscientes dos compromissos acordados nas leis anticorrupção e fomento de padrões éticos nas diferentes áreas de atuação. O cumprimento das diretrizes, valores e conduta exigida de todos os colaboradores, diretores, independente de sua posição na hierarquia organizacional. Graças a estas medidas, a BRM Group contribui para a criação de um ambiente social mais ético e a promoção de uma cultura de transparência.
    `;
}