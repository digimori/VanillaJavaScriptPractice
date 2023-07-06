const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Getting the element with ID of btn
const btn = document.getElementById('btn');

// Getting the span class with the class of color
const color = document.querySelector('.color');

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// Event listener listening for mouse click which then calls an "Anonymous function" and initiates the logic within the code block {}
btn.addEventListener('click', function() {
    // hex must start with #
   let hexColour = '#';
   // For looping through the array upto a value of 6, as there are 6 characters in hex codes
   for(let i = 0; i < 6; i++) {
    hexColour += hex[getRandomNumber()] // Appending the values pulled from the for loop
   }
   // Changing the body and text content colours on the page by targeting them
   color.textContent = hexColour;
   document.body.style.backgroundColor = hexColour;
})

