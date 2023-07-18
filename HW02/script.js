
function changedColor() {
let toChange = document.getElementById("colorList");
console.log(colorList);
toChange.classList.toggle("colorList");
}

let btnList = document.getElementById("btnColor");
console.log(btnColor);
btnList.addEventListener("click", changedColor);


function changedText() {
let toChangeText = document.getElementById("colorText");
console.log(colorText);
toChangeText.classList.toggle("colorText");
toChangeText.textContent = "The Eurasian otter (Lutra lutra), also known as the European otter, Eurasian river otter, European river otter, common otter, and Old World otter, is a semiaquatic mammal native to Eurasia. The most widely distributed member of the otter subfamily (Lutrinae) of the weasel family (Mustelidae), it is found in the waterways and coasts of Europe, many parts of Asia, and parts of northern Africa. The Eurasian otter has a diet mainly of fish, and is strongly territorial. It is endangered in some parts of its range, but is recovering in others."
}

let btnText = document.getElementById("btnText");
console.log(btnText);
btnText.addEventListener("click", changedText);
