function exerciseOne(){
    const user = {};
    user.name = "John";
    user.surname = "Smith";
    console.log(user);
    
    user.name = "Pete";
    console.log(user);
    
    delete user.name;
    console.log(user);    
}

function isEmpty(object){
    for(let item in object){
        return false;
    }
    return true;
}

function emptyTest(){
    let schedule = {};

    console.log("empty test start")

    console.log( isEmpty(schedule) ); // true

    schedule["8:30"] = "get up";

    console.log( isEmpty(schedule) ); // false

    console.log("empty test end")
}

function sum() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete:130
    };
    let sum = 0;
    for(item in salaries){
        sum += salaries[item];
    }

    salaries["sum"] = sum;
    console.log(salaries.sum);
}

function multiplyNumeric(obj){
    for(item in obj){
        if(!isNaN(obj[item])){
            obj[item] *= 2;
        }
    }
}

function multiplyNumericTest(){
    // before the call
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };
  
    multiplyNumeric(menu);

    // after the call
    console.log("Numeric Test Start")
    console.log(menu.width === 400);
    console.log(menu.height === 600);
    console.log(menu.title === "My menu");
    console.log("Numeric Test End")
}

/***
 * 
 * 
 * function Man(name){
    //object constructor
    //can also be written as class
    this.name = name;
    this.introduceSelf = function(){
        console.log(`Hi! I'm ${this.name}.`);
    };
}
 */
class Man {
    constructor(name) {
        this.name = name;
        this.introduceSelf = function () {
            console.log(`Hi! I'm ${this.name}.`);
        };
    }
}

function exerciseFive(){
    const person = {
        name: ["Bob","Smith"],
        age:32,
        bio() { //you can shorthand like this as well
            console.log(`${this.name[0]} and ${this.name[1]} are ${this.age} years old`);
        },
        introduceSelf: function() {
            console.log(`Hi! I'm ${this.name[0]}.`);
        },
        salaries: {
            firstHolding: 50.3,
            secondHolding: 50.6,
            holdingListing() {
                console.log(`holdings: ${this.firstHolding}, ${this.secondHolding}`);
            }
        }
    };

    person.bio();
    person.introduceSelf();
    person.salaries.holdingListing();

    const myDataName = "height";
    const myDataValue = "1.75m";
    person[myDataName] = myDataValue;

    console.log(person.height);

    let man = new Man("John");
    man.name = "Pete";
    man.introduceSelf();
}

const section = document.querySelector(".result");

function exerciseSix(){
    const cat = {
        name : 'Bertie',
        breed : 'Cymric',
        color : 'white',
        greeting: function() {
          console.log('Meow!');
        }
      }
      
      // Put your code here
      let catName = cat["name"];
      cat.greeting();
      cat.color = "black";
      
      
      // Don't edit the code below here

      let para1 = document.createElement('p');
      let para2 = document.createElement('p');
      
      para1.textContent = `The cat's name is ${ catName }.`;
      para2.textContent = `The cat's color is ${ cat.color }.`;
      
      section.appendChild(para1);
      section.appendChild(para2);
}

function exerciseSeven(){
    let bandInfo;

    // Put your code here
    let band = {
        name: "Test",
        nationality: "USA",
        genre: "Rock",
        members:3,
        formed: 2012,
        split: false,
        albums: [
            {
                name: "Go On",
                released: 2013,
            },
            {
                name: "Love",
                released: 2015,
            }
        ],
        bio(){
            let yearsActive = (this.split > 0)? this.split - this.formed: 2023 - this.formed;
            return `The band ${this.name} from ${this.nationality} has been around for ${yearsActive} years,
            they play in the genre of ${this.genre} with their first album being called ${this.albums[0].name}
            ,released in ${this.albums[0].released}.`;
        }
    };

    bandInfo = band.bio();


    // Don't edit the code below here

    let para1 = document.createElement('p');
    para1.textContent = bandInfo;
    section.appendChild(para1);
}

class Cat {
    constructor(name,breed,color){
        this.name = name;
        this.breed = breed;
        this.color = color;
    }

    greeting(){
        console.log(`Hello, said ${this.name} the ${this.breed}.`);
    }
}

function exerciseEight(){
    const cat = new Cat('Bertie','Cymric','white');
    const cat2 = new Cat('Bok', 'Yulan', 'green');

    cat.greeting();
    cat2.greeting();
}



function run(){
    exerciseOne();
    emptyTest();
    sum();
    multiplyNumericTest();
    exerciseFive();
    //exerciseSix();
    exerciseSeven();
    exerciseEight();
}

run();