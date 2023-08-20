function arrayToCountObject(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        obj[arr[i]] = count;
    }
    return obj;
}

function swap(a,b){
a = a + b;
b = a - b;
a = a - b;
return [a,b]
}

function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

const array = [1,1,1,1, 2, 3, 3, 3, 4, 4, 4, 4];
const countObject = arrayToCountObject(array);
console.log(countObject);
const swap_result = swap(12,9);
console.log(swap_result);
const factorialOf5 = factorial(5);
console.log(factorialOf5);
