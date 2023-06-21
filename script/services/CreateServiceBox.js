import servicesContent from '../db/ServicesContent.js';

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