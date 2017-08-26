/// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCKoaYzp2gMW7adK1GnOf5b4LWL6n0SuoU",
    authDomain: "js-task2-4fa65.firebaseapp.com",
    databaseURL: "https://js-task2-4fa65.firebaseio.com",
    projectId: "js-task2-4fa65",
    storageBucket: "",
    messagingSenderId: "1028001953359"
  };
  firebase.initializeApp(config);

//JQuery
//
// $(document).ready(function(){
//
//     var hadlebarsTest = $("#test").html();
//     var compiledTest = Handlebars.compile(hadlebarsTest);
//     var experienceBl = $(".experience-block");
//     console.log(compiledTest);
//
//
//     var dbRef = firebase.database().ref();
//
//     if($("body").hasClass(".body-test")){
//         experienceBl.html(compiledTest);
//     } else {
//         dbRef.on("value", function(snap){
//             experienceBl.html(compiledTest(snap.val()));
//             console.log(snap.val());
//         })
//     }
// })


var developersGrid = document.querySelector("#developers-grid");
var developersName = document.querySelectorAll(".developer-name");
var developersPicture = document.querySelectorAll(".developer-picture");


//handlebars on JS

var hadlebarsExperienceBl = document.querySelector("#experience-block").innerHTML;
var compiledTestExperienceBl = Handlebars.compile(hadlebarsExperienceBl);
var experienceBl = document.querySelector(".experience-block");


var perObj = document.querySelector("#object");
var dBRefObject = firebase.database().ref().child("users");

dBRefObject.on("value", function(snap) {
    var usersInfo = snap.val();
    // experienceBl.innerHTML = compiledTestExperienceBl(usersInfo);
    // console.log(usersInfo);

    //connecting developers pictures to info in dbs

    for(var i = 0; i < developersName.length; i++){
        developersName[i].innerHTML = usersInfo[i].name;
        developersPicture[i].setAttribute("data-name", usersInfo[i].name);
    }
});

function showDevelopersProfile(e){

    if(e.target != e.currentTarget){
        var clickedItem = e.target.id;
        mainPage.classList.add("main-page_hide");
        profilePage.classList.remove("profile-page_hide");
        
    }

    e.stopPropagation();
};

// function test(from, to, context, options){
//     var item = "";
//     for (var i = from, j = to; i < j; i++) {
//         item = item + options.fn(context[i]);
//     }
//     return item;
// }
// Handlebars.registerHelper('listItem', test);

developersGrid.addEventListener("click", showDevelopersProfile, false);


//skills result bar

var skillsResultBlock = document.querySelector("#skills-result");
var dBRefSkills = dBRefObject;

dBRefSkills.on("child_added", function(snap) {
    
    var usersSkills = snap.val().skills[0];
    console.log(usersSkills);

    for (var key in usersSkills){

    var skillScore = document.createElement("span");
    skillScore.classList.add("skills-result__skill-name");
    skillScore.innerHTML = key;
    var skillBar = document.createElement("div");
    skillBar.classList.add("skills-result__bar");
    skillBar.style.width = usersSkills[key] + "%";
    skillBar.appendChild(skillScore);
    skillsResultBlock.appendChild(skillBar);
    }

});







