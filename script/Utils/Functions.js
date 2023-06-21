export function createSpanTagIcon(iconString){
    const icon = document.createElement("span");
    icon.className = iconString + " icon";
    icon.style.margin = "0 .3rem";

    return icon;
}

export function createAnchor(string, url){
    const anchor = document.createElement("a");
    anchor.innerHTML = string;
    anchor.href = url;
    anchor.rel = "external";
    anchor.target = "_blank";

    return anchor;
}