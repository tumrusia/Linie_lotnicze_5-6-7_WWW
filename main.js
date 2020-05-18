"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function zaloguj() {
    var komunikaty = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        komunikaty[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArrays(["Ależ skomplikowany program!"], komunikaty));
}
zaloguj("Ja", "cię", "nie", "mogę");
function fib(num) {
    if (num === 0) {
        return 0;
    }
    else if (num <= 2) {
        return 1;
    }
    else {
        return fib(num - 1) + fib(num - 2);
    }
}
exports.fib = fib;
var Pilot = /** @class */ (function () {
    function Pilot() {
    }
    return Pilot;
}());
function sprawdzDaneLiniiLotniczej(dane) {
    return typeof dane.piloci !== 'undefined' &&
        typeof dane.lotniska !== 'undefined';
}
var jsonString = "{\n    \"piloci\": [\n        \"Pirx\",\n        \"Exupery\",\n        \"Idzikowski\",\n        \"G\u0142\u00F3wczewski\"\n    ],\n    \"lotniska\": {\n        \"WAW\": [\"Warszawa\", [3690, 2800]],\n        \"NRT\": [\"Narita\", [4000, 2500]],\n        \"BQH\": [\"Biggin Hill\", [1802, 792]],\n        \"LBG\": [\"Paris-Le Bourget\", [2665, 3000, 1845]]\n    }\n}";
var daneLiniiLotniczej = JSON.parse(jsonString);
console.log(sprawdzDaneLiniiLotniczej(daneLiniiLotniczej));
if (sprawdzDaneLiniiLotniczej(daneLiniiLotniczej)) {
    var juzNaPewnoDaneLinii = daneLiniiLotniczej;
}
function poprawneDane() {
    var todayDate = new Date();
    var dd = String(todayDate.getDate());
    if (dd.length === 1) {
        dd = '0' + dd;
    }
    var mm = String(todayDate.getMonth() + 1); // January is 0!
    if (mm.length === 1) {
        mm = '0' + mm;
    }
    var yyyy = todayDate.getFullYear();
    var today = yyyy + '-' + mm + '-' + dd;
    var msg = "Błędne dane: ";
    if (imie.value.length === 0) {
        msg = msg.concat("Podaj imię.");
    }
    if (nazwisko.value.length === 0) {
        msg = msg.concat(" Podaj nazwisko.");
    }
    if (termin.value.length === 0) {
        msg = msg.concat(" Podaj datę.");
    }
    else if (termin.value < today) {
        msg = msg.concat(" Podaj przyszłą datę.");
    }
    var submitBtn = document.querySelector(".submit");
    if (msg === "Błędne dane: ") {
        msg = "Dane do rezerwacji są poprawne";
        submitBtn.style.pointerEvents = "auto";
    }
    else {
        submitBtn.style.pointerEvents = "none";
    }
    console.log(msg);
}
function rezerwuj() {
    var popup = document.querySelector(".confirm");
    popup.textContent = "Rezerwacja się powiodła";
    console.log(popup.textContent);
    popup.style.display = "flex";
    var popupClose = document.createElement("div.close");
    popupClose.setAttribute("style", "position: absolute; right: 15px; top: 15px");
    popupClose.setAttribute("onclick", "closePopup()");
    var X = document.createTextNode("X");
    popupClose.appendChild(X);
    popup.appendChild(popupClose);
}
function resetuj() {
    console.log(imie.value, ", ", imie.value.length);
    console.log(nazwisko.value, ", ", nazwisko.value.length);
    console.log(termin.value, ", ", termin.value.length);
    imie.value = "";
    nazwisko.value = "";
    termin.value = "";
}
var imie = document.querySelector("input[name=fname]");
var nazwisko = document.querySelector("input[name=lname]");
var termin = document.querySelector("input[type=date]");
imie.addEventListener('input', poprawneDane);
nazwisko.addEventListener('input', poprawneDane);
termin.addEventListener('input', poprawneDane);
function closePopup() {
    var popup = document.querySelector(".confirm");
    popup.style.display = "none";
}
var dropdown = document.querySelectorAll("dropdown-btn");
dropdown.forEach(function (element) {
    element.addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
        else {
            dropdownContent.style.display = "block";
        }
    });
});
setTimeout(function () {
    console.log("No już wreszcie. Minęły 2s.");
}, 2000);
var waitSomeTime = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    });
};
function teczoweKolory(el) {
    waitSomeTime(1000)
        .then(function () {
        el.style.backgroundColor = "red";
        return waitSomeTime(1000);
    })
        .then(function () {
        el.style.backgroundColor = "orange";
        return waitSomeTime(1000);
    })
        .then(function () {
        el.style.backgroundColor = "yellow";
        return waitSomeTime(1000);
    })
        .then(function () {
        el.style.backgroundColor = "green";
        return waitSomeTime(1000);
    })
        .then(function () {
        el.style.backgroundColor = "blue";
        return waitSomeTime(1000);
    })
        .then(function () {
        el.style.backgroundColor = "indigo";
        return waitSomeTime(1000);
    })
        .then(function () {
        el.style.backgroundColor = "purple";
    })["catch"](function (error) {
        console.log(error.message);
    });
}
var naglowek = document.querySelector("header");
teczoweKolory(naglowek);
var nowyElement = document.createElement("p");
nowyElement.setAttribute("style", "background-color: rgb(217, 236, 252); width: 460px; padding: 10px");
var text = document.createTextNode("Made by JS!");
nowyElement.appendChild(text);
var lastDiv = document.querySelector(".parent-grid");
lastDiv.appendChild(nowyElement);
console.log(nowyElement.textContent);
nowyElement.innerHTML = "Author of last commit in TypeScript repo:";
console.log(nowyElement.textContent);
fetch('https://api.github.com/repos/Microsoft/TypeScript/commits')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var avatarURL = data[0].author.avatar_url;
    console.log(avatarURL);
    var avatarIMG = document.createElement("img");
    avatarIMG.setAttribute("src", avatarURL);
    avatarIMG.setAttribute("style", "padding: 20px");
    nowyElement.appendChild(avatarIMG);
});
var countParity = 0;
// let countClicks = 0;
var rightCol = document.querySelector(".right");
function changeColColor() {
    /*countClicks += 1;
    const fibonacci = fib(10*countClicks);
    console.log(fibonacci);*/
    if (!rightCol.contains(event.target)) {
        return;
    }
    if (countParity === 0) {
        rightCol.style.backgroundColor = "purple";
        countParity = 1;
    }
    else {
        rightCol.style.backgroundColor = "white";
        countParity = 0;
    }
}
function dontChange() {
    rightCol.style.backgroundColor = "white";
    countParity = 1 - countParity;
}
document.body.addEventListener("click", changeColColor, false);
var formularz = document.querySelector(".formularz");
formularz.setAttribute("onClick", "dontChange()");
