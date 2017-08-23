var mainPage = document.querySelector("#main-page");
var profilePage = document.querySelector("#profile-page");
profilePage.classList.add("profile-page_hide");

var developersGrid = document.querySelector("#developers-grid");

function showDevelopersProfile(e){
	if(e.target != e.currentTarget){
		var clickedItem = e.target.id;
		mainPage.classList.add("main-page_hide");
		profilePage.classList.remove("profile-page_hide");
	}
	e.stopPropagation();
}

developersGrid.addEventListener("click", showDevelopersProfile, false);

//to main page

function showMainPage(){
	mainPage.classList.remove("main-page_hide");
	profilePage.classList.add("profile-page_hide");
}

var toMainPageBtn = document.querySelector("#to-main-page");
toMainPageBtn.addEventListener("click", showMainPage);