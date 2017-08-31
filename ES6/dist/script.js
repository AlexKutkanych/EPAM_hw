"use strict";

var buttons = document.querySelectorAll("button");

var _loop = function _loop(i) {
    button = buttons[i];

    button.innerText = i;
    button.onclick = function (e) {
        console.log(i);
    };
};

for (var i = 0; i < buttons.length; i++) {
    var button;

    _loop(i);
}

//const

var PI = 3.14159;

console.log(PI);

//spread operators

var cars = ["BMW", "Mercedes", "Audi"];
var trucks = ["MAN", "Scania", "Iveco"];

var allTransport = [].concat(cars, ["Boeing", "AN"], trucks);
console.log(allTransport);

var numbers = [2, 5, 6];

function multiply(a, b, c) {
    console.log(a * b * c);
}

multiply.apply(undefined, numbers);