//Obje declaration
const playerOne = {
    name: "tim",
    marker: "X",
    sayName: function(){
        console.log(playerOne.name);
    }
}

const playerTwo = {
    name: "jenn",
    marker: "O",
    sayName: function(){
        console.log(playerTwo.name);
    }
}

//Obj constructor
function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function () {
        console.log(name);
    }
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
playerOne.sayName();
playerTwo.sayName();
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'


function Book(title, author, pageNum, isRead){
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.isRead = isRead;
    this.info = () => {
        let readStatus = (isRead)? "already read": "not read yet";
        return `${title} by ${author}, ${pageNum} pages, ${readStatus}`;
    };
}


const bookOne = new Book("Dummy", "Dumman",2000,true);

console.log(bookOne.info());

//Prototype -> basically a property object that all other objs inherit from its base object/constructor
//you can add stuff here to make it accesible to all object of that type
//(kinda like a adding an extension function/new variable in a base class in Kotlin)

Player.prototype.sayHello = () => {
    console.log("Hello, I am a player!");
}

player1.sayHello();
player2.sayHello();

// Player.prototype.__proto__
//Player also inherit from Object
console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype); // true

// Output may slightly differ based on the browser
//example of prototype function -> valueOf() is inherited from Object
console.log(player1.valueOf()) // Output: Object { name: "steve", marker: "X", sayName: sayName() }

//hasOwnProperty -> check if property exist on this object (not counting those inherited from prototypes)
console.log(player1.hasOwnProperty('sayHello')); // false
console.log(player1.hasOwnProperty('valueOf')); // false
console.log(Object.prototype.hasOwnProperty('valueOf')); // true