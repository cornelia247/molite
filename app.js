const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });
};
navSlide();
const Fslide = () => {
    const dropdown = document.querySelector(".default-option");
    const filter = document.querySelector(".filter");
    dropdown.addEventListener("click", () => {
        filter.classList.toggle("filter-active");
    });
};
Fslide();
