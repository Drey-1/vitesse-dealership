const button = document.querySelector(".navigation__btn");
const list = document.querySelector(".navigation__list");
let isVisible = false;

const appear = () => {
    if(isVisible) {
        list.style.display = "none";
        isVisible = false;
        button.classList.remove("navigation__btn--active")
    } else {
        list.style.display = "flex"
        isVisible = true;
        button.classList.add("navigation__btn--active")
    }
}