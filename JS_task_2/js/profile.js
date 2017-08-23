//to top btn

var burgerMenuIcon = document.querySelector("#burger-icon");
var test = document.querySelector(".top-menu");

burgerMenuIcon.addEventListener("click", function(){
    this.classList.toggle("open");
    test.classList.toggle("top-menu_open");
})


window.onscroll = function(){
    scrollScreen();
};

var html = document.querySelector("html");
var toTopButton = document.querySelector("#to-top-button");

function scrollScreen(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}
