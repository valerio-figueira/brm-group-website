export default function makeNavResponsive() {
    const openNav = document.querySelector(".mobile-btn");
    const closeNav = document.querySelector(".close-btn");
    const nav = document.querySelector(".navbar");

    openNav.addEventListener("click", () => addConditionalNavbar(nav));

    closeNav.addEventListener("click", () => addConditionalNavbar(nav));
}

function addConditionalNavbar(nav) {
    if (!nav.matches(".mobile")) {
        nav.classList.add("mobile");
    } else {
        nav.classList.remove("mobile");
    }
}