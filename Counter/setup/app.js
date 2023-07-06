// Sets initial count
let count = 0;

// Selecting value and buttons:

// Getting the 0 value from the span with ID of value
const value = document.querySelector('#value');
// Selecting all buttons - querySelectorAll creates a NodeList - Needs to be transformed into an Array in other situations
const btns = document.querySelectorAll('.btn')

//btn is passed in as argument here
btns.forEach(function(btn) {
    /*Adding an event listener to the buttons to listen for clicks. 
      Passing the event (e) into the function callback*/
    btn.addEventListener('click', function(e) {
        // Useful for checking console to make sure the click event is working, also for easily finding the class it belongs to in DOM tree
        console.log(e.currentTarget.classList);
        // Assigning these classes to a variable for use in later if statement
        const styles = e.currentTarget.classList;

        // Checking if the button clicked has this class name and then applying the condition in the code block
        if(styles.contains('decrease')) {
            count--;
        } 
        else if(styles.contains('increase')){
            count++;
        } else {
            count = 0;
        }
        // The next line then changes the value of the span we defined earlier (const value) to be the current count
        value.textContent = count;    
    })
})