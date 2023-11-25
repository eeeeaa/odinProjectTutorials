function sumRange(n) {
  if (n <= 0) {
    return 0;
  }

  return n + sumRange(n - 1);
}

console.log("sumRange:");
console.log(sumRange(3));

function power(num, n) {
  if (n <= 0) {
    return 1;
  }

  return num * power(num, n - 1);
}

console.log("Power:");
console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log("Factorial:");
console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 === 120

function all(array, callback) {
  /*another way
    var copy = copy || array.slice(); // shallow copies array

	if(copy.length === 0) return true;

	if(callback(copy[0])){
		copy.shift(); // remove first element from array
		return all(copy, callback);
	} else {
		return false;
	}  
*/
  let tempArray = array.slice();
  if (tempArray.length <= 1) {
    return callback(tempArray[0]);
  }

  let tempElement = tempArray.shift();
  return callback(tempElement) && all(tempArray, callback);
}

var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

var allAreLessThanEight = all([1, 2, 7], function (num) {
  return num < 8;
});
console.log("All array:");
console.log(allAreLessThanSeven); // false
console.log(allAreLessThanEight); // true

function productOfArray(array) {
  let tempArray = array.slice();

  if (tempArray.length === 0) {
    return 1;
  }

  let element = tempArray.shift();
  return element * productOfArray(tempArray);
}
console.log("Product of array: ");
console.log(productOfArray([1, 2, 3])); //6
console.log(productOfArray([1, 2, 3, 10])); // 60

function contains(obj, searchValue) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], searchValue);
    }
    if (obj[key] === searchValue) {
      return true;
    }
  }
  return false;
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};
console.log("Contains: ");
console.log(contains(nestedObject, 44)); //true
console.log(contains(nestedObject, "foo")); // false

function totalIntegers(array) {
  /*Alternative:
    if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
    */
  let sum = 0;
  for (item of array) {
    if (Array.isArray(item)) {
      sum += totalIntegers(item);
      continue;
    }
    if (Number.isInteger(item)) {
      sum += 1;
      continue;
    }
  }
  return sum;
}

console.log("total number of integer in multi-array: ");
console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]])); // 7

function SumSquares(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let tempArray = array.slice();
  let element = tempArray.shift();

  if (Array.isArray(element)) {
    total += SumSquares(element);
  } else if (typeof element === "number") {
    total += element * element;
  }

  return total + SumSquares(tempArray);
}
console.log("total sum of squares of number in multi-array: ");
let l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

/*alternative
function replicate(times, number){
	if(times <= 0) return [];

	return [number].concat(replicate(times - 1, number));
}
*/
function replicate(repeatTime, repeatValue, result = []) {
  if (repeatTime < 0) return [];
  if (repeatTime === 0) return result;

  let tempResult = result.slice();
  tempResult.push(repeatValue);

  return replicate(repeatTime - 1, repeatValue, tempResult);
}

console.log("Replicate into an array:");
console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
