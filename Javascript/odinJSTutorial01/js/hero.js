function Hero(name, level){
    this.name = name;
    this.level = level;
}

Hero.prototype.greet = function(){
    return `${this.name} greets you`;
}

function Warrior(name, level, weapon){
    //use call to chain constructors (kinda like extending a class)
    //copy Hero properties to this constructor 
    Hero.call(this,name,level); 

    this.weapon = weapon;
}

function Healer(name,level,spell){
    Hero.call(this,name,level);

    this.spell = spell;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

//current prototype chain: Warrior -> Hero -> Object
//current prototype chain: Healer -> Hero -> Object

Warrior.prototype.attack = function() {
    return `${this.name} attacks with ${this.weapon}`;
}

Healer.prototype.heal = function() {
    return `${this.name} casts ${this.spell}`;
}

const hero1 = Warrior("Gon", 15, `axe`);
const hero2 = Healer('Luna', 17, `cure`);