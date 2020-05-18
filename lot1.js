var pasazerowie = document.querySelectorAll(".count");
var biggestID = "";
var biggestIDPassenger = "";
pasazerowie.forEach(function (item, index) {
    if (item.getAttribute('data-identyfikator-pasazera') > biggestID) {
        biggestID = item.getAttribute('data-identyfikator-pasazera');
        biggestIDPassenger = item.textContent;
    }
});
var hisName = biggestIDPassenger.split('-'); // to cut off place number
console.log(hisName[0]);
