const output = document.querySelector('.result-output');

function clickButtonOne(){
    output.textContent = "I click first button!";
}

function clickButtonTwo(){
    output.textContent = "I Click second button!";
}

//let input = prompt("What is the \"official\" name of JavaScript?");

//alert((input === "ECMAScript")? "Right!" : "You dont know? \"ECMAScript\"");

//input = prompt("Give me a number");
/*if(/^\d+$/.test(input.trim())){
    alert((input > 0)? 1 : (input < 0)? -1: 0);
}else{
    alert("Not a number");
}*/

//let result = (a + b < 4)? 'Below' : 'Over';
function loginTest(){
    let login = "Yo";
    let message = 
    (login === 'Employee')? 'Hello':
    (login === 'Director')? 'Greetings':
    (login === '')? 'No login': '';
    alert(message); 
}


//anonynemous functions
// textbox.addEventListener("keydown", event => {...}); //can use if only one params
// textbox.addEventListener("keydown", event => ...); //can use if only one line of code + return the value
// textbox.addEventListener("keydown", (event) => {...});
// textbox.addEventListener("keydown", function (event) {...});

function confirm(text){
    prompt(text);
}

function checkAge(age){
    return (age > 18)? true : confirm('Did your parents allow this?');
}

function min(a,b){
    return (b <= a)? b: a;
}

function unitTest() {
    let result = (
        min(2,5) === 2 &&
        min(3,-1) === -1 &&
        min(1,1) === 1
    )
    if(result){
        alert("test passed!");
    } else {
        alert("test failed!");
    }
}


function pow(x,n){
    if(n < 1 || !Number.isInteger(x) || !Number.isInteger(n)){
        return "not supported";
    }
    let result = 1;
    for(i = 0; i < n; i++){
        result *= x;
    }
    return result;
}

function powTest(){
   let x = prompt("give me X");
   let n = prompt("give me N");
   
   alert(pow(+x,+n));5
}

//Note: in js, function is a value, so you can use it inline (kinda like lamda in kotlin)

function confirmQuestion(text){
    let input = prompt(text);
    return (input === "yes")? true: false;
}

function ask (question, yes, no){
    if(confirmQuestion(question)) yes() //pass in function as parameter
    else no();
}

ask(
    "Are you Ok?",
    function() {  //things like this is called function expression
        alert("good for you");
    },
    function() { 
        alert("I am sorry");
    }
)

//function expression can also be written with arrows (basically lamda)
ask(
    "Is everything fine?",
    () => {alert("that's good then");},
    () => {alert("Sorry to hear that");}
)