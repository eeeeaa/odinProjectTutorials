// from here: https://javascript.info/operators

//QnA near page bottom
/**
 * "10" right
 * nan wrong, -1
 * 1 right
 * 2 right
 * 6 right
 * 9px right
 * $45 right
 * 2 right
 * error wrong, nan
 * "   -9   5" right
 * -14 right
 * nan wrong, 1
 * nan right
 * error wrong, -2
 * **/

//let alpha = prompt("First Number?", 1);
//let beta = prompt("Second Number?", 2);
//alert(+alpha + +beta);

let max = 57;
let actual = max - 13;
let percentage = actual / max;
//alert(`the percentage is ${percentage}`); //use `` for this

let a = "bla bla bad";
let b = a.replace(/BLA/i,"bow");
//alert(`result is ${b}`);

// &&, || in JS can be used for non-boolean value as well
// || -> from left to right, return first true value, else return last value
// && -> from left to right, return first false value, else return last value

//example
let input = prompt("Who's there?","");

if(input === "Admin"){

    let password = prompt("Password?","");

    if(password === "TheMaster"){

        alert("Welcome!");
    } else if (password === '' || password === null){
        alert("Canceled");
    } else if (password.length > 0) {
        alert("Wrong password");
    }

} else if(input === '' || input === null) {

    alert("Canceled");

} else if(input.length > 0) {

    alert("I don't know you");
    
}