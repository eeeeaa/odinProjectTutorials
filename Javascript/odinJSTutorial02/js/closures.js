
function outer() {
    let outerVar = "This is outer var";

    return function inner() {
        let innerVar = "This is inner var";
        console.log(innerVar);
        console.log(outerVar);
    }
}

//create inner function outside of outer, but still able to access outerVar
let innerFun = outer();

innerFun();

//making use of closure to have private variables
function createGreeting(greeting = "") {
    const myGreet = greeting.toUpperCase();
    return function (name) {
        return `${myGreet} ${name}`;
    };
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('wes'));
console.log(sayHello('kait'));
console.log(sayHey('kait'));


//Think of it like creating a base class called Game
function createGame(gameName) {
    let score = 0;
    return function win() {
        score++;
        return `Your name ${gameName} score is ${score}`
    }
}
const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
console.log(hockeyGame()); //increment score, then print name and score
console.log(hockeyGame());

console.log(soccerGame());
console.log(soccerGame());


// closure =  
//            A function with preserved data.
//            Give you access to an outer function’s scope,
//            from an inner function.

//            State of variables in outer scope are "saved".
//            Variables in outer scope are considered "private".

// **************************

let score = function () {

    let points = 0;

    return function () {

        points += 1;
        return points;
    }
}();

//points += 100; //ERROR
console.log(score());
console.log(score());
console.log(score());

