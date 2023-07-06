const colors = ["green", "red", "blue", "pink", "antiquewhite", "aquamarine", "brown"];

//Getting the element with ID of btn
const btn = document.getElementById('btn');

// Getting the span class with the class of color
const color = document.querySelector('.color');

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

// Event listener listening for mouse click which then calls an "Anonymous function" and initiates the logic within the code block {}
btn.addEventListener('click', function() {
   // Get a ransom number between 0 and 3 as the Array has 4 entries - ie colors[0]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

