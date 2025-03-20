const character = {};

// character.name = "Frodo Baggins";
// character.skintone = "#63451A";
// character.height = `4'1"`;
// character.hair = "waves";
// character.shoes = "Js";
// character.weight = "500lbs";

// console.log(character)
const form = document.querySelector('form');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    // console.log(form);
    // console.log(form.name.value);
    // console.log(form.heightFt.value);
    // console.log(form.hair.value);
    
    //configure object with form data
    character.name = form.name.value;
    character.skintone = form.skintone.value;
    character.height = `${form.heightFt.value}'${form.heightIn.value}"`; //`4'1"`;
    character.hair = form.hair.value;
    character.shoes = form.shoes.value;
    character.weight = form.weight.value + "lbs";

    //create UI element
    let characterDisplay = document.createElement('p');
    characterDisplay.innerHTML = JSON.stringify(character);
    //add it to the screen
    document.body.appendChild(characterDisplay);
});