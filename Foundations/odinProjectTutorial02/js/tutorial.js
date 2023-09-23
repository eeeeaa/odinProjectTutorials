function someCode(birthday){
    /*Note: floating point calculation not accurate in JS, use Integer instead*/
    let currentYear = "18.04.2023";
    let currentArray = currentYear.split(".");
    let birthArray = birthday.split(".");
    let year = Number(currentArray[2]) - Number(birthArray[2]);
    if(year >= 0){
        return year.toString();
    } else {
        return "Unknown";
    }
}

const BIRTHDAY = "18.04.1982";
const AGE = someCode(BIRTHDAY);
console.log(AGE);

//round up number
let decimalNumber = 1.22254653235;
console.log(decimalNumber.toFixed(2));

//convert string to number
let number = "77";
console.log(Number(number) + 3);
console.log(+number + 3); //plus sign as prefix do same thing as Number(...)

// === -> strict comparison (compare value and datatype)
// == -> compare only value
// if in doubt, use === or !==

// = returns a value as well so you can do something like
let a;
let b = 5 + (a = 8 + 6); //not recommend, but possible
console.log(b);
let c;
let d;
let f;
let g = f = d = c = 5; //chain assignment, all of them are five now
console.log(c,d,f,g);

//right part calculate first for some inline assignment
let inplace = 3;
inplace *=5 + 2; // equivalent to b*=7
console.log(inplace);

//increment/decrement only work on variable, not value e.g. 5++ wont work
// if use the return value, variable++ returns old value while ++variable return new value
let original = 5;
let newOne = original++; //get 5
let newTwo = ++original; //get 6

//using comma only return last result
let commaTest = (1+2,3+4,5+6);
console.log(commaTest); //print 11 from 5 + 6