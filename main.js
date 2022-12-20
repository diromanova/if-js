// Task 1
function palindrom(word) {
  return word == word.toLowerCase().split('').reverse().join('');
}

const str1 = 'wow';
console.log(palindrom(str1));

const str2 = 'bird';
console.log(palindrom(str2));

const str3 = 'SOS';
console.log(palindrom(str3));

// Task 2.1
function min(a, b) {
  return a < b ? a : b;
}

const num1 = 34;
const num2 = 15;

console.log(min(num1, num2));

// Task 2.2
function max(x, y) {
  return x > y ? x : y;
}

const num3 = 3;
const num4 = 5;

console.log(max(num3, num4));

// Task 3

// const array = [1, 30, 4, 0, 60, 5, 9, 3, 0, 4];

// function returnZeroArray(array2) {
//   array.map();
// }
// console.log(returnZeroArray);
