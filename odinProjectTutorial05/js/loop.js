function exerciseZero(){
    const cars = ["Cars1", "Cars2"];

    //map and filter
    const bigCars = cars.map(car => car.toUpperCase());
    const filterCars = cars.filter(function(car){ return car === "Cars1";});

    console.log(bigCars);
    console.log(filterCars);
}

function exerciseOne(){
    let output = document.querySelector('.output');
    output.innerHTML = '';

    let i = 10;

    while(i >= 0){
        const para = document.createElement('p');
        para.textContent = `Countdown ${i}`;
        if(i === 0){
            para.textContent = `Blast off!`;
        }
        output.appendChild(para);
        i--;
    }
}

function excerciseTwo(){
    const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

    const admitted = document.querySelector('.admitted');
    const refused = document.querySelector('.refused');
    admitted.textContent = 'Admit: ';
    refused.textContent = 'Refuse: ';

    // loop starts here
    for(let i = 0; i < people.length; i++) {
        let displayText = `${people[i]}, `;
        if(people[i] === "Phil" || people[i] === "Lola"){
            refused.textContent += displayText;
            continue; //skip to next iteration
        }
        admitted.textContent += displayText;
    }
    admitted.textContent = admitted.textContent.substring(0, admitted.textContent.lastIndexOf(",")) + ".";
    refused.textContent = refused.textContent.substring(0, refused.textContent.lastIndexOf(",")) + ".";
}

function excersiceThree(){
    const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
    const list = document.createElement('ul');

    // Add your code here
    for( item of myArray){
        const listElement = document.createElement('li');
        listElement.textContent = item;
        list.appendChild(listElement);
    }

    // Don't edit the code below here!

    const section = document.querySelector('.previewOne');
    section.appendChild(list);
}

function excerciseFour(){
    const name = 'Mustafa';
    const para = document.createElement('p');

    const phonebook = [
      { name : 'Chris', number : '1549' },
      { name : 'Li Kang', number : '9634' },
      { name : 'Anne', number : '9065' },
      { name : 'Francesca', number : '3001' },
      { name : 'Mustafa', number : '6888' },
      { name : 'Tina', number : '4312' },
      { name : 'Bert', number : '7780' },
      { name : 'Jada', number : '2282' },
    ]

    // Add your code here
    for(phone of phonebook){
        if(phone["name"] === name){
            para.textContent = `name: ${phone["name"]}, number: ${phone["number"]}`;
            break;
        }
    }

    // Don't edit the code below here!
    const section = document.querySelector('.previewTwo');
    section.appendChild(para);
}

function excerciseFive(){
    let i = 500;
    const para = document.createElement('p');

    function isPrime(num) {
      for(let i = 2; i < num; i++) {
        if(num % i === 0) {
          return false;
        }
      }

      return true;
    }


    // Add your code here
    while(i >=2 && i <= 500){
        if(isPrime(i)){
            para.textContent += `${i},\n`;
        }
        i--;
    }


    // Don't edit the code below here!
    const section = document.querySelector('.previewThree');
    section.appendChild(para);
}

function excerciseSix(){
    for(let i = 2; i <= 10; i ++){
        if(i % 2 === 0){
           console.log(i); 
        }
    }
}

function excerciseSeven(){
    let i = 0;
    while(i < 3){
        console.log(`number ${i}!`);
        i++;
    }
}

function excerciseEight(){
    let keepGoing = true;
    while(keepGoing){
        let input = prompt("please input number greater than 100", 0);
        if(+input > 100 || input == null || input == ""){
            keepGoing = false;
        }
    }
}

function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

function excerciseNine(){
    let input = prompt("give me number", 1);
    for(i = 2; i <= input; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
    /* ---Another Solution---
    let n = 10;

    nextPrime: //loop label, can be used to break/continue outer loop in nested loop
    for (let i = 2; i <= n; i++) { // for each i...
    
      for (let j = 2; j < i; j++) { // look for a divisor..
        if (i % j == 0) continue nextPrime; // not a prime, go next i
      }
    
      alert( i ); // a prime
    }
    */
}

exerciseOne();
excerciseTwo();
excersiceThree();
excerciseFour();
excerciseFive();
excerciseSix();
excerciseSeven();
//excerciseEight();
excerciseNine();


