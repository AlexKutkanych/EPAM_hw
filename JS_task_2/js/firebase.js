// Initialize Firebase
var config = {
    apiKey: "AIzaSyCX3YZmwixfga08a3WxWsSHKtu9DfRskiU",
    authDomain: "js-task2.firebaseapp.com",
    databaseURL: "https://js-task2.firebaseio.com",
    projectId: "js-task2",
    storageBucket: "",
    messagingSenderId: "488465552416"
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
// var test = document.querySelector("#object");

//handlebars on JS

var hadlebarsTest = document.querySelector("#experience-block").innerHTML;
var compiledTest = Handlebars.compile(hadlebarsTest);
var experienceBl = document.querySelector(".experience-block");

var dBRef = firebase.database().ref();

dBRef.on("value", function(snap) {
    var usersInfo = snap.val();
    experienceBl.innerHTML = compiledTest(usersInfo);
    console.log(usersInfo.users[0].name);

    //connecting developers pictures to info in dbs



    for(var i = 0; i < developersName.length; i++){
        developersName[i].innerHTML = usersInfo.users[i].name;
        developersPicture[i].setAttribute("data-name", usersInfo.users[i].name);
    }

    //test




    function showDevelopersProfile(e){
        if(e.target != e.currentTarget){
            var clickedItem = e.target.id;
            mainPage.classList.add("main-page_hide");
            profilePage.classList.remove("profile-page_hide");


            var test1 = document.querySelector("#education");
            test1.innerHTML = e.target.getAttribute("data-name");
        }
        e.stopPropagation();
    };

    developersGrid.addEventListener("click", showDevelopersProfile, false);

});


Handlebars.registerHelper('listItem', function (from, to, context, options){
    var item = "";
    for (var i = from, j = to; i < j; i++) {
        item = item + options.fn(context[i]);
    }
    return item;
});








    // var test = document.querySelector("#education");

    // test.addEventListener("click", function(){
    //     var test1 = document.querySelector(".education-year");
    //     test1.innerHTML = usersInfo[0].education[0].year;
    // })

// });



