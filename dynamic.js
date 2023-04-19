navbutton = document.querySelector(".nav_button");

navbutton.onclick = function MyFunction() {
    thelist = document.querySelector(".middle_buttons");
    navBar = document.querySelector(thelist);
    navBar.classList.toggle("active");

}
