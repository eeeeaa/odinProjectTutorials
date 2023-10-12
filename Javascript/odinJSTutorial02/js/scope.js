//Most of these are similiar to other languages
//except `var` i.e. var can leak outside block scope
//just don't use it, use `let` instead

//Global variables
const first = "Wes";
const second = "Bos";
let third = "Man";
const sayHi = function(){
    console.log("Hi!");
}

//Function scope
function hairType(){
    const hair = 'blonde';
}

//Block scope
//note: var can leak outside block scope!
if(first == second){
    const cool = true;
}

//lexical/static scoping
//i.e. when call another function inside another function
//it only cares about where the function is defined, not where its calls

const dog = 'snickers';

function logDog() {
  console.log(dog);
}

function logDogTwo(dog){
    console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog();
  logDogTwo(dog);
}

go(); //will print 'snickers' follows by 'sunny'