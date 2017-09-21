//open burger menu

var burgerIcon = document.querySelector("#burger-icon");
var headerMenu = document.querySelector(".header-navigation");

burgerIcon.addEventListener("click", function(){
    burgerIcon.classList.toggle("open");
    headerMenu.classList.toggle("header-navigation_open");
} )
