function zaloguj(...komunikaty: string[]) {
    console.log("Ależ skomplikowany program!", ...komunikaty);
}

export function fib(num: number) {
    if (num === 0) {
        return 0;
    } else if (num <= 2) {
        return 1;
    } else {
        return fib(num-1) + fib(num-2);
    }
}

interface ILotnisko {
    id: string;
    nazwa: string;
}

class Pilot {
    imie: string;
}

interface ILiniaLotnicza {
    piloci: Pilot[];
    lotniska: ILotnisko[];
}

function sprawdzDaneLiniiLotniczej(dane: any): dane is ILiniaLotnicza {
    return typeof (dane as ILiniaLotnicza).piloci !== 'undefined' &&
     typeof (dane as ILiniaLotnicza).lotniska !== 'undefined';
}


const jsonString: string = `{
    "piloci": [
        "Pirx",
        "Exupery",
        "Idzikowski",
        "Główczewski"
    ],
    "lotniska": {
        "WAW": ["Warszawa", [3690, 2800]],
        "NRT": ["Narita", [4000, 2500]],
        "BQH": ["Biggin Hill", [1802, 792]],
        "LBG": ["Paris-Le Bourget", [2665, 3000, 1845]]
    }
}`;

const daneLiniiLotniczej = JSON.parse(jsonString);
if(sprawdzDaneLiniiLotniczej(daneLiniiLotniczej)) {
    const juzNaPewnoDaneLinii = daneLiniiLotniczej;
}

function poprawneDane() {
    const todayDate = new Date();
    let dd = String(todayDate.getDate());
    if (dd.length === 1) {
        dd = '0' + dd;
    }
    let mm = String(todayDate.getMonth() + 1); // January is 0!
    if (mm.length === 1) {
        mm = '0' + mm;
    }
    const yyyy = todayDate.getFullYear();

    const today = yyyy + '-' + mm + '-' + dd;
    let msg = "Błędne dane: ";

    if (imie.value.length === 0) {
        msg = msg.concat("Podaj imię.");
    }
    if (nazwisko.value.length === 0) {
        msg = msg.concat(" Podaj nazwisko.");
    }
    if (termin.value.length === 0) {
        msg = msg.concat(" Podaj datę.");
    } else if (termin.value < today) {
        msg = msg.concat(" Podaj przyszłą datę.");
    }

    const submitBtn = document.querySelector(".submit") as HTMLInputElement;
    if (msg === "Błędne dane: ") {
        msg = "Dane do rezerwacji są poprawne";
        submitBtn.style.pointerEvents = "auto";
    } else {
        submitBtn.style.pointerEvents = "none";
    }
    console.log(msg);
}

function rezerwuj() {
    const popup = document.querySelector(".confirm") as HTMLInputElement;

    popup.textContent = "Rezerwacja się powiodła";
    console.log(popup.textContent);
    popup.style.display = "flex";

    const popupClose = document.createElement("div.close");
    popupClose.setAttribute("style", "position: absolute; right: 15px; top: 15px");
    popupClose.setAttribute("onclick", "closePopup()");
    const X = document.createTextNode("X");
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

const imie = document.querySelector("input[name=fname]") as HTMLInputElement;
const nazwisko = document.querySelector("input[name=lname]") as HTMLInputElement;
const termin = document.querySelector("input[type=date]") as HTMLInputElement;
imie.addEventListener('input', poprawneDane);
nazwisko.addEventListener('input', poprawneDane);
termin.addEventListener('input', poprawneDane);

function closePopup() {
    const popup = document.querySelector(".confirm") as HTMLInputElement;
    popup.style.display = "none";
}

const dropdown = document.querySelectorAll("dropdown-btn");

dropdown.forEach(element => {
    element.addEventListener("click", function() {
        this.classList.toggle("active");
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
        });
});

setTimeout(() => {
    console.log("No już wreszcie. Minęły 2s.");
  }, 2000);


const waitSomeTime = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

function teczoweKolory(el: HTMLElement) {
    waitSomeTime(1000)
    .then( () => {
        el.style.backgroundColor = "red";
        return waitSomeTime(1000)
    })
    .then( () => {
        el.style.backgroundColor = "orange";
        return waitSomeTime(1000)
    })
    .then( () => {
        el.style.backgroundColor = "yellow";
        return waitSomeTime(1000)
    })
    .then( () => {
        el.style.backgroundColor = "green";
        return waitSomeTime(1000)
    })
    .then( () => {
        el.style.backgroundColor = "blue";
        return waitSomeTime(1000)
    })
    .then( () => {
        el.style.backgroundColor = "indigo";
        return waitSomeTime(1000)
    })
    .then( () => {
        el.style.backgroundColor = "purple";
    })
    .catch((error) => {
        console.log(error.message);
    });
}

const naglowek = document.querySelector("header");
teczoweKolory(naglowek);

const nowyElement = document.createElement("p");
nowyElement.setAttribute("style", "background-color: rgb(217, 236, 252); width: 460px; padding: 10px");
const text = document.createTextNode("Made by JS!");
nowyElement.appendChild(text);
const lastDiv = document.querySelector(".parent-grid");
lastDiv.appendChild(nowyElement);

console.log(nowyElement.textContent);
nowyElement.innerHTML = "Author of last commit in TypeScript repo:"
console.log(nowyElement.textContent);

fetch('https://api.github.com/repos/Microsoft/TypeScript/commits')
  .then(response => response.json())
  .then(data => {
      const avatarURL = data[0].author.avatar_url;
      console.log(avatarURL);

      const avatarIMG = document.createElement("img");
      avatarIMG.setAttribute("src", avatarURL);
      avatarIMG.setAttribute("style", "padding: 20px");
      nowyElement.appendChild(avatarIMG);
  });

let countParity = 0;
// let countClicks = 0;
const rightCol = document.querySelector(".right") as HTMLInputElement;
function changeColColor() {
    /*countClicks += 1;
    const fibonacci = fib(10*countClicks);
    console.log(fibonacci);*/
    if (!rightCol.contains(event.target as Node)) {
        return;
    }
    if (countParity === 0) {
        rightCol.style.backgroundColor ="purple";
        countParity = 1;
    } else {
        rightCol.style.backgroundColor ="white";
        countParity = 0;
    }
}

function dontChange() {
    rightCol.style.backgroundColor ="white";
    countParity = 1 - countParity;
}

document.body.addEventListener("click", changeColColor, false);
const formularz = document.querySelector(".formularz") as HTMLInputElement;
formularz.setAttribute("onClick", "dontChange()")
