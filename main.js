
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


const date = '2022-01-17';
const result = date.split('-').reverse().join('.');
console.log(result);

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function search(place) {
  for (let i = 0; i < data.length; i++) {
    if (`${data[i].country}${data[i].city}${data[i].hotel}`.includes(place)) {
      const { country, city, hotel } = data[i];
      const location = `Страна: ${country}, город: ${city}, отель: ${hotel}`;
      console.log(location);
    }
  }
}
search('Rotterdam');