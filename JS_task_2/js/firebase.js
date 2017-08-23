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


// var test = document.querySelector("#object");

var usersInfo = [];

var database = firebase.database().ref().child("users");
database.on('value', function (snap) {
    usersInfo = snap.val();
    console.log(usersInfo[0].name);


    var developersName = document.querySelectorAll(".developer-name");
    for(var i = 0; i < developersName.length; i++){
        developersName[i].innerHTML = usersInfo[i].name;
    }



    // var test = document.querySelector("#education");

    // test.addEventListener("click", function(){
    //     var test1 = document.querySelector(".education-year");
    //     test1.innerHTML = usersInfo[0].education[0].year;
    // })

});



