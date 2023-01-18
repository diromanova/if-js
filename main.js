
function sum(numOne) {
  return function (numTwo) {
    if (numOne === undefined || 0) {
      return numTwo;
    } else if (numTwo === undefined || 0) {
      return numOne;
    }
    return (numOne += numTwo);
  };
}

console.log(sum(5)(2));

const textOne = document.getElementById('text1');
const textTwo = document.getElementById('text2');
const textThree = document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function colorChange() {
  let i = 0;
  return function (e) {
    e.target.style.color = colors[i];
    i++;
    if (i >= colors.length) {
      i = 0;
    }
  };
}

textOne.addEventListener('click', colorChange());
textTwo.addEventListener('click', colorChange());
textThree.addEventListener('click', colorChange());

// Task 1
function palindrom(word) {
  return word.toLowerCase() == word.toLowerCase().split('').reverse().join('');
}

// Task 2.1
function min(a, b) {
  return a < b ? a : b;
}

// Task 2.2
function max(x, y) {
  return x > y ? x : y;
}

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

