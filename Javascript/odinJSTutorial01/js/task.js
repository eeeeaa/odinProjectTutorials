let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(pockets.pen);
console.log(bed.glasses);

let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

/**
 * because this is an object before the dot, so rabbit.eat() modifies rabbit.
 *   Property lookup and execution are two different things.
 *   The method rabbit.eat is first found in the prototype, 
 *   then executed with this=rabbit.
 * 
 * NOTE: this is only the case for simple assignment of value! i.e. A = B
 **/

rabbit.eat();

/**
 * for other type of assignment i.e. array.push() 
 * it will search up until it found the property
 * 
 */

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

/**
 * The search algorithm happens like below:
 *  1. The method speedy.eat is found in the prototype (=hamster), 
 *  then executed with this=speedy (the object before the dot).

    2. Then this.stomach.push() needs to find stomach property 
    and call push on it. It looks for stomach in this (=speedy), but nothing found.

    3. Then it follows the prototype chain and finds stomach in hamster.

    4. Then it calls push on it, adding the food into the stomach of the prototype.
 */

// This one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// This one also has it
alert(lazy.stomach); // apple