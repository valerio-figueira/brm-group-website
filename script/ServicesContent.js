const servicesContent = [
    {
        title: "Conectamos todas as áreas da administração pública",
        content: "Sistemas integrados com banco de dados, servidores e soluções personalizadas para atender seu município. Produzimos aplicações tecnológicas sob demanda.",
        img: "imgs/globe-analytics.svg",
        alt: "Ícone de Globe Analytics"
    },
    {
        title: "Reformulação e modernização de processos",
        content: "Evite a burocracia e acúmulos de pastas de papel. Nossas soluções possibilitam a geração automática de documentos eletrônicos, acompanhamento de trâmites com rastreabilidade e segurança para todas as áreas.",
        img: "imgs/operating-system.svg",
        alt: "Ícone de Operating System"
    },
    {
        title: "Mais eficiência para a gestão pública",
        content: "Tecnologia que contribui com agilidade e transparência para otimizar os recursos do seu município. Nossa equipe de especialistas está pronta para fazer o melhor planejamento para sua empresa.",
        img: "imgs/3d-data-analytics-bars-graphic.svg",
        alt: "Ícone de Data Analytics"
    },
    {
        title: "Serviços contábeis para pequenas, médias e grandes empresas",
        content: "Nossos contadores são líderes consolidados no mercado, com anos de experiência e prontos para inovar o seu negócio com implementações de software e automação de negócio.",
        img: "imgs/infographic.svg",
        alt: "Ícone de Infográfico"
    },
    {
        title: "Especialistas contábeis com capacitação",
        content: "Equipe multidisciplinar, com qualidade de atendimento, formada por contadores experientes e com muitos anos de mercado, sempre atualizados para cada seguimento.",
        img: "imgs/stock-data-analytics-interface-symbol-with-businessmen.svg",
        alt: "Ícone de Businessmen"
    },
    {
        title: "Infraestrutura de tecnologia",
        content: "Servidores, Storage, Backup, Virtualização, Cloud, projeto de ativos de rede, solução de Telecom, soluções em Segurança, monitoramento e gerenciamento de ambientes tecnológicos.",
        img: "imgs/database.svg",
        alt: "Ícone database"
    },
    {
        title: "Consultoria Contábil Pública",
        content: "Revisão de Leis, Decretos junto aos poderes Executivos e Legislativos, acompanhamento e apoio junto ao TCE, TCU, RFB, CGU entre outros.",
        img: "imgs/infographic-development.svg",
        alt: "Ícone de infográfico"
    },
    {
        title: "Gestão, Controles e Orçamentos",
        content: "Mapeamento dos processos organizacionais das atividades e a adequação aos sistemas informatizados, orçamentos e outros.",
        img: "imgs/line-graphic.svg",
        alt: "Ícone de gráfico"
    },
]

export default function createServiceBox(servicesContainer){
    // ADD SERVICES DYNAMICALLY 
    servicesContent.forEach(service => {
        const box = createElements(service.title, service.content, service.img, service.alt);
        servicesContainer.appendChild(box);
    });
}




function createElements(title, text, imgURL, imgAlt){
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const img = document.createElement("img");

    article.className = "box";
    h3.className = "title";
    p.className = "paragraph";
    img.className = "icon";

    h3.innerHTML = title;
    p.innerHTML = text;
    img.src = imgURL;
    img.alt = imgAlt;

    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(img);

    return article;
}