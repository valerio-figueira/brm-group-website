export default function createIntroductionText(){
    const container = document.querySelectorAll(".about-container .box");

    container[0].children[1].innerHTML = `
    A <strong>BRM Group</strong> nasceu da necessidade de oferecer uma <strong>estrutura sólida</strong> para as <strong>soluções digitais</strong> desenvolvidas para nossos clientes. Somos um conjunto de empresas comprometidas com a <strong>qualidade dos serviços</strong> e com o <strong>suporte ao cliente</strong>. Nosso principal foco é produzir softwares sob demanda e personalizados, atendendo às necessidades específicas de cada organização. Nosso compromisso é fornecer <strong>suporte dedicado</strong> e serviços de <strong>alta qualidade</strong> para atender às suas expectativas. Estamos prontos para ajudá-lo a alcançar o sucesso do seu negócio.
    `;

    container[1].children[1].innerHTML = `
    Na <strong>BRM Group</strong>, colocamos <strong>nossos clientes</strong> no <strong>centro de tudo</strong> o que fazemos. Buscamos constantemente aprimorar nossas <strong>habilidades</strong> e <strong>conhecimentos</strong>, mantendo-nos atualizados com as tendências e <strong>avanços tecnológicos</strong> mais recentes. Assim, garantimos que nossos clientes estejam sempre um passo à frente da concorrência. Além de fornecer <strong>soluções tecnológicas</strong> de ponta, <strong>valorizamos</strong> o <strong>relacionamento</strong> com nossos clientes. Buscamos entender suas necessidades e desafios, trabalhando em parceria para alcançar objetivos comuns. 
    `;
}