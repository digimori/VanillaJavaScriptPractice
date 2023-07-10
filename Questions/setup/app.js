// Using the usual add/remove class list to show things, loop over them for multiples
// Get the element via queryselector/getElementBy, then add event listeners

//using selectors inside the element
// traversing the dom

// Select all buttons
const btns = document.querySelectorAll('.question-btn');

// Loop, function(e) is accessing the event object
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        console.log(e.currentTarget);
    })
})