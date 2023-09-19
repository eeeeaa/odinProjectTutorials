/***
 * @param {string} str //type annotation (tell which type param is in comment)
 */
function camelize(str){
    let elements = str.split('-');
    let camel = elements.map((element, index) => {
        if(index === 0){
            return element
        } else {
          return element.charAt(0).toUpperCase() + element.slice(1);  
        }
    });
    console.log(camel.join(''));
    return camel.join('');
}

/***
 * @param {Number[]} arr
 * @param {number} a
 * @param {number} b  
 */
function filterRange(arr, a, b){
    let filteredArray = arr.filter((num)=> {
       return num >= a && num <= b; 
    });
    return filteredArray;
}

/***
 * @param {Number[]} arr
 * @param {number} a
 * @param {number} b  
 */
function filterRangeInPlace(arr, a, b){
    arr.forEach((num, index) => {
        if(num < a || num > b){
            arr.splice(index,1);
        }
    });
}

/***
 * @param {Number[]} arr
 */
function decreaseSort(arr){
    arr.sort(
        (a,b) => {
            if(a > b) return -1;
            else if (a == b) return 0;
            else return 1;
        }
    );
}

/***
 * @param {string[]} arr
 */
function copySorted(arr){
    let arrCopy = arr.slice();
    return arrCopy.sort();
}

function Calculator(){
    const operationMap = {
        "+": (a,b) => a + b,
        "-": (a,b) => a - b,
    };

    this.calculate = (value) => {
        let elements = value.split(" ");
        
        let firstNum = +elements[0];
        let secondNum = +elements[2];

        for(let key in operationMap){
            if(key === elements[1]){
                return operationMap[key](firstNum, secondNum);
            }
        }
        return "invalid operation"
    };
    this.addMethod = (name, func) => {
        if(typeof func === 'function'){
             operationMap[name] = func;
        }
    }
}

/***
 * @param {object[]} arr 
 */
function convertToNames(arr){
    return arr.map((obj) => {
        return obj.name;
    });
}

/***
 * @param {object[]} arr 
 */
function mapToFullNameObjects(arr){
    return arr.map((obj) => {
        return {
            id: obj.id,
            fullName: `${obj.name} ${obj.surname}`
        }
    });
}

/***
 * @param {object[]} arr 
 */
function sortByAge(arr){
    return arr.sort((a,b) => {
        if(a.age > b.age){
            return 1;
        } else if (a.age === b.age){
            return 0;
        } else{
            return -1;
        }
    });

    //shorter solution: arr.sort((a, b) => a.age - b.age);
    //sort function only check for positive/negative number to compare
    //(doesnt have to be 1,-1 -> could be -2,2,3,etc.)
}

/***
 * @param {*[]} arr 
 */
function shuffle(arr){
    console.log("start shuffling...");
    let shuffleArray = arr.slice();
    this.arr = [];
    let i = 0;
    while(shuffleArray.length > 0){
        let randomIndex = Math.floor(Math.random() * (shuffleArray.length));
        arr[i++] = shuffleArray[randomIndex];
        shuffleArray.splice(randomIndex,1);
    }
    /***
     * //Better way:  Fisher-Yates algorithm
     * walk the array in the reverse order and swap each element with a random one before it
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
     */
}

/***
 * @param {object[]} arr 
 */
function getAverageAge(arr){
    let totalAge = arr.reduce((total, element) =>{
        return total + element.age;
    }, 0);
    return totalAge / arr.length;
}

/***
 * @param {*[]} arr 
 */
function unique(arr){
    let result = [];
    for(let item of arr){
        if(!result.includes(item)){
            result.push(item);
        }
    }
    return result;

    //Shorter and Better performance, use set
    // “set of values” (without keys), where each value may occur only once.
    //let set = new Set(arr);
    //return Array.from(set);
}

/***
 * @param {object[]} arr 
 */
function groupById(arr){
    let result = arr.reduce((obj, element) => {
        obj[element.id] = element;
        return obj;
    }, {});
    return result;
}

function camelizeTest(){
    console.log(camelize("background-color") == 'backgroundColor');
    console.log(camelize("list-style-image") == 'listStyleImage');
    console.log(camelize("-webkit-transition") == 'WebkitTransition');
}

function filterRangeTest(){
    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4);

    console.log( filtered ); // 3,1 (matching values)

    console.log( arr ); // 5,3,8,1 (not modified)
}

function filterRangeInPlaceTest(){
    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

    console.log( arr ); // [3, 1]
}

function decreaseSortTest(){
    let arr = [5, 2, 1, -10, 8];

    decreaseSort(arr);

    console.log( arr ); // 8, 5, 2, 1, -10
}

function copySortedTest(){
    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    console.log( sorted ); // CSS, HTML, JavaScript
    console.log( arr ); // HTML, JavaScript, CSS (no changes)
}

function calculatorTest(){
    let calc = new Calculator;

    console.log( calc.calculate("3 + 7") === 10 ); // 10

    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    console.log( result === 8 ); // 8
}

function convertToNamesTest(){
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [ john, pete, mary ];

    let names = convertToNames(users);

    console.table( names ); // John, Pete, Mary
}

function mapToFullNameObjectsTest(){
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [ john, pete, mary ];

    let usersMapped = mapToFullNameObjects(users);

    /*
    usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
    ]
    */
    console.log( usersMapped[0].id ) // 1
    console.log( usersMapped[0].fullName ) // John Smith
}

function sortByAgeTest(){
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [ pete, john, mary ];

    sortByAge(arr);

    // now: [john, mary, pete]
    console.log(arr[0].name); // John
    console.log(arr[1].name); // Mary
    console.log(arr[2].name); // Pete
}

function shuffleTest(){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    shuffle(arr);
    console.table(arr);
}

function getAverageAgeTest(){
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [ john, pete, mary ];

    console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
}

function uniqueTest(){
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    console.table( unique(strings) ); // Hare, Krishna, :-O
}

function groupByIdTest(){
    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
      ];
      
      let usersById = groupById(users);

      console.table(usersById);
      
      /*
      // after the call we should have:
      
      usersById = {
        john: {id: 'john', name: "John Smith", age: 20},
        ann: {id: 'ann', name: "Ann Smith", age: 24},
        pete: {id: 'pete', name: "Pete Peterson", age: 31},
      }
      */
}

function runTests(){
    camelizeTest();
    filterRangeTest();
    filterRangeInPlaceTest();
    decreaseSortTest();
    copySortedTest();
    calculatorTest();
    convertToNamesTest();
    mapToFullNameObjectsTest();
    sortByAgeTest();
    shuffleTest();
    getAverageAgeTest();
    uniqueTest();
    groupByIdTest();
}

runTests();

