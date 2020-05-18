let pasazerowie = document.querySelectorAll(".count");
let biggestID = "";
let biggestIDPassenger = "";

pasazerowie.forEach((item, index) => {
    if (item.getAttribute('data-identyfikator-pasazera') > biggestID) {
        biggestID = item.getAttribute('data-identyfikator-pasazera');
        biggestIDPassenger = item.textContent;
    }
});

const hisName = biggestIDPassenger.split('-'); // to cut off place number
console.log(hisName[0]);