const container = document.querySelector("#container");

const redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey I'm red!";

const blueText = document.createElement("h3");
blueText.style.color = "blue";
blueText.textContent = "I'm a blue h3";

const borderBox = document.createElement("div");
borderBox.style.border = "2px solid black";
borderBox.style.backgroundColor = "pink";
const boxHeader = document.createElement("h1");
boxHeader.textContent = "I'm in a div";
const boxContent = document.createElement("p");
boxContent.textContent = "ME TOO!";
borderBox.appendChild(boxHeader);
borderBox.appendChild(boxContent);


container.appendChild(redText);
container.appendChild(blueText);
container.appendChild(borderBox);

// using Event with JS and html, second method
const btn = document.querySelector("#second-btn");
btn.onclick = (event) => {
    console.log(event);//optional parameter
    alert("Hello World!");
}

// using Event with JS and html, third method (Recommended)
const thirdBtn = document.querySelector("#third-btn");
thirdBtn.addEventListener('click', (event) => {
    console.log(event); //optional parameter
    alert("Hello World!");
});

//Other uses
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue'; //change button color
});

//Callback function example
/**
 * Callbacks are just functions passed into other functions as 
 * arguments (as a parameter).
 */
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]); // This is when the callback function gets called, or executed
    }
}
  
// You would call it like this:
const myArry = [2, 3, 4, 2];

myForEach(myArry, (item) => {
    console.log(item + 2); 
});


//Iteration through elements
const buttons = document.querySelectorAll('#second button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
    });
});
