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
