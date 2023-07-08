// classList - Will show/Get all of the classes
// contains - Checks classList for a specific class
// add/remove/toggle - Add/Remove/Toggle class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// Event listeners
navToggle.addEventListener('click', function() {
    //console.log(links.classList); - Shows the classList for links in the console.
    // console.log(links.classList.contains('random')); This will show "false" as the class of random does not exist.

if(links.classList.contains('show-links')) {
    links.classList.remove('show-links');
} else {
    links.classList.add('show-links');
}
/* Alternatively to refactor, you can use the below instead of else/if
links.classList.toggle('show-links');
*/
})

/*
The classes are set up in CSS, the heights are important for the links class, especially in media queries. 
Without the rems set, they will break and look wonky. 
*/
