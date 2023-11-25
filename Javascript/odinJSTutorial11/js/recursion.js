//How to think about writing recusion function
//1. find the base case that terminates the recursion e.g. if n is 1, return 1, etc.
//2. find the recursive case where recursion take place

function sumToLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToRecusive(n) {
  if (n <= 1) {
    return 1;
  }
  return n + sumToRecusive(n - 1);
}

function sumToProgression(n) {
  return (n * (n + 1)) / 2;
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function fib(n) {
  /*if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);*/

  let a = 1; //first term
  let b = 1; //second term
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printListLoop(list) {
  let currentItem = list;
  while (currentItem) {
    console.log(currentItem.value);
    currentItem = currentItem.next;
  }
}

function printListLoopRecursion(list) {
  console.log(list.value);

  if (list.next) {
    return printListLoopRecursion(list.next);
  }
}

function printListReverseLoop(list) {
  let valueList = [];
  let currentItem = list;
  while (currentItem) {
    valueList.push(currentItem.value);
    currentItem = currentItem.next;
  }

  for (let i = valueList.length - 1; i >= 0; i--) {
    console.log(valueList[i]);
  }
}

function printListReverseRecursion(list) {
  let arrOfValues = [];
  arrOfValues.push(list.value);

  if (list.next) {
    printListReverseRecursion(list.next);
  }

  while (arrOfValues.length > 0) {
    console.log(arrOfValues.pop());
  }
}

function collatz(n, totalStep = 0) {
  //collatz conjecture: how many step it takes to 1
  if (n === 1) {
    return totalStep;
  }

  if (n % 2 === 0) {
    return collatz(n / 2, (totalStep += 1));
  } else {
    return collatz(3 * n + 1, (totalStep += 1));
  }
}

console.log(collatz(1));
console.log(collatz(2));
console.log(collatz(3));
console.log(collatz(4));
console.log(collatz(5));
console.log(collatz(6));
console.log(collatz(7));
console.log(collatz(8));
console.log(collatz(15));
console.log(collatz(27));
console.log(collatz(50));

/*console.log("SumTo");
console.log(sumToLoop(100));
console.log(sumToRecusive(100));
console.log(sumToProgression(100));
console.log("Factorial");
console.log(factorial(5));
console.log("Fibbonacci");
console.log(fib(3));
console.log(fib(7));
console.log(fib(77));
console.log("PrintLinkedList");
printListLoop(list);
printListLoopRecursion(list);
console.log("PrintReverseLinkedList");
printListReverseLoop(list);
printListReverseRecursion(list);*/
