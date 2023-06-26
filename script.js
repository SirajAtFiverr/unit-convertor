
const inputEl = document.querySelector(".user-input");
const button = document.querySelector(".convert-button");
const lengthSectionEl = document.querySelector(".length-section");
const volumeSectionEl = document.querySelector(".volume-section");
const massSectionEl = document.querySelector(".mass-section");

const paragraphEl1 = document.createElement("p");
const paragraphEl2 = document.createElement("p");
const paragraphEl3 = document.createElement("p");


button.addEventListener("click", function(){
    let userInput = inputEl.value;
    if(!userInput) return;

    paragraphEl1.textContent = `${userInput} meters = ${meterToFeet(userInput)} feet |
                               ${userInput} feet = ${feetToMeter(userInput)} meters`
    lengthSectionEl.append(paragraphEl1);

    paragraphEl2.textContent = `${userInput} liters = ${literToGallon(userInput)} gallons |
                               ${userInput} gallons = ${gallonToLiter(userInput)} liters`
    volumeSectionEl.append(paragraphEl2);

    paragraphEl3.textContent = `${userInput} kilogram = ${kilogramToPound(userInput)} pounds |
                               ${userInput} pounds = ${poundToKilogram(userInput)} kilogram`
    massSectionEl.append(paragraphEl3);

});


function meterToFeet(value){
    return (value * 3.28084).toFixed(3);
}

function feetToMeter(value){
    return (value * 0.304).toFixed(3);
}

function literToGallon(value){
    return (value * 0.264172).toFixed(3);
}

function gallonToLiter(value){
    return (value * 3.785412).toFixed(3);
}

function kilogramToPound(value){
    return (value * 2.2).toFixed(3);
}

function poundToKilogram(value){
    return (value * 0.45359237).toFixed(3);
}