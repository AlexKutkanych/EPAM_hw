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
//
//     var experienceBl = $(".experience-block");
//     // experienceBl.innerHTML = compiledTest(usersInfo1);
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




// var test = document.querySelector("#object");



var experienceBl = document.querySelector(".experience-block");

var hadlebarsTest = document.querySelector("#test").innerHTML;
var compiledTest = Handlebars.compile(hadlebarsTest);

var database = firebase.database().ref();
database.on('value', function (snap) {
    experienceBl.innerHTML(compiledTest(snap.val()));
    console.log(snap.val());
});
    //connecting developers pictures to info in dbs

    // var developersName = document.querySelectorAll(".developer-name");
    // var developersPicture = document.querySelectorAll(".developer-picture");

    // for(var i = 0; i < developersName.length; i++){
    //     developersName[i].innerHTML = usersInfo[i].name;
    //     developersPicture[i].setAttribute("data-name", usersInfo[i].name);
    // }


    // function showDevelopersProfile(e){
    //     if(e.target != e.currentTarget){
    //         var clickedItem = e.target.id;
    //         mainPage.classList.add("main-page_hide");
    //         profilePage.classList.remove("profile-page_hide");
    //     }
    //     e.stopPropagation();
    // };

    // developersGrid.addEventListener("click", showDevelopersProfile, false);



    // var test = document.querySelector("#education");

    // test.addEventListener("click", function(){
    //     var test1 = document.querySelector(".education-year");
    //     test1.innerHTML = usersInfo[0].education[0].year;
    // })

// });



