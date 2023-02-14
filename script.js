/* Declare variables below to save the different sections (divs) of your story*/

let district2Button = document.querySelector(".option-one");
let district2Screen = document.querySelector(".option-two-screen");
let district12Button = document.querySelector(".option-two");
let district12Screen = document.querySelector(".option-one-screen");

let peetamellarkButton = document.querySelector(".peeta-button");
let katnisseverdeenButton = document.querySelector(".katniss-button");
let district12Ending = document.querySelector(".option-one-end");

let catohadleyButton = document.querySelector(".cato-button");
let clovekentwellButton = document.querySelector(".clove-button");
let district2Ending = document.querySelector(".option-two-end");

//When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

district2Button.onclick = function() {
    district2Screen.style.display = "block";
    district2Screen.scrollIntoView();
};

district12Button.onclick = function() {
    district12Screen.style.display = "block";
    district12Screen.scrollIntoView();
};

peetamellarkButton.onmouseover = function() {
	district12Ending.style.display = "block";
    district12Screen.scrollIntoView();
};
katnisseverdeenButton.onclick = peetamellarkButton.onclick;

catohadleyButton.onclick = function() {
    district2Ending.style.display = "block";
    district2Ending.scrollIntoView();
};
clovekentwellButton.onclick = catohadleyButton.onclick;