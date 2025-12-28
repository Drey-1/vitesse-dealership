const goUpScreen = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")

    if(window.scrollY > 10){
        header.classList.add("header--scrolled")
    } else {
        header.classList.remove("header--scrolled")
    }
})