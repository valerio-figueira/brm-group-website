export default function createIntroductionText(){
    const container = document.querySelectorAll(".about-container .box");

    container[0].children[1].innerHTML = `
    A BRM Group foi criada pela necessidade de estruturar nossas <span class="destaque">soluções digitais</span> desenvolvidas para os clientes. A criação deste grupo forma um sólido conjunto de empresas que preza pela <span class="destaque">qualidade dos serviços</span> e <span class="destaque">suporte ao cliente</span>. Produzimos softwares sob demanda e personalizados para cada tipo de organização. Nossa equipe fornece soluções digitais que trazem melhor experiência a você cliente. Somos focados em nossos clientes, no suporte e na qualidade de serviços prestados. Conte com a BRM Group para o sucesso de seu negócio.
    `;

    container[1].children[1].innerHTML = `
    Somos formados por princípios de integridade, ética e respeito ao ser humano. Nossos serviços são reconhecidos pela <span class="destaque">qualidade</span>, <span class="destaque">segurança</span> e <span class="destaque">agilidade</span> ao cliente. A BRM Group é composta por especialistas renomados na área de <span class="destaque">tecnologia</span>, <span class="destaque">soluções digitais</span> e <span class="destaque">contabilidade</span>. Desenvolvemos aplicações tecnológicas que dão segurança e que supram aos interesses de nossos clientes. Nós da <span class="destaque">BRM Group</span> temos amor pelo que fazemos.
    `;
}