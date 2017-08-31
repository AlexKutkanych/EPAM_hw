
var buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++){
    var button = buttons[i];
    button.innerText = i;
    button.onclick = function (e) {
        console.log(i);
    }

}

//const

const PI = 3.14159;

console.log(PI);

//spread operators

let cars = ["BMW", "Mercedes", "Audi"];
let trucks = ["MAN", "Scania", "Iveco"];

let allTransport = [...cars, "Boeing", "AN", ...trucks];
console.log(allTransport);

let numbers = [2, 5, 6];

function multiply(a, b, c){
    console.log(a * b * c);
}

multiply(...numbers);