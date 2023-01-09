// Task 1
function palindrom(word) {
  return word.toLowerCase() == word.toLowerCase().split('').reverse().join('');
}
palindrom();

// Task 2.1
function min(a, b) {
  return a < b ? a : b;
}
min();

// Task 2.2
function max(x, y) {
  return x > y ? x : y;
}
max();

// Task 3

const array = [1, 30, 4, 0, 60, 5, 9, 3, 200, 4];

const returnZeroArray = array.map(function (element) {
  if (element == 0) {
    return 'zero';
  } else if (element % 10 == 0) {
    return element.toString().replaceAll(0, 'zero');
  }
  return element;
});

returnZeroArray();
