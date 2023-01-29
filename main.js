// function sum(numOne) {
//   return function (numTwo) {
//     if (numOne === undefined || 0) {
//       return numTwo;
//     } else if (numTwo === undefined || 0) {
//       return numOne;
//     }
//     return (numOne += numTwo);
//   };
// }

// console.log(sum(5)(2));

// const textOne = document.getElementById('text1');
// const textTwo = document.getElementById('text2');
// const textThree = document.getElementById('text3');
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

// function colorChange() {
//   let i = 0;
//   return function (e) {
//     e.target.style.color = colors[i];
//     i++;
//     if (i >= colors.length) {
//       i = 0;
//     }
//   };
// }

// textOne.addEventListener('click', colorChange());
// textTwo.addEventListener('click', colorChange());
// textThree.addEventListener('click', colorChange());

// // Task 1
// function palindrom(word) {
//   return word.toLowerCase() == word.toLowerCase().split('').reverse().join('');
// }

// // Task 2.1
// function min(a, b) {
//   return a < b ? a : b;
// }

// // Task 2.2
// function max(x, y) {
//   return x > y ? x : y;
// }

// // Task 3

// const array = [1, 30, 4, 0, 60, 5, 9, 3, 200, 4];

// const returnZeroArray = array.map(function (element) {
//   if (element == 0) {
//     return 'zero';
//   } else if (element % 10 == 0) {
//     return element.toString().replaceAll(0, 'zero');
//   }
//   return element;
// });

// const date = '2022-01-17';
// const result = date.split('-').reverse().join('.');
// console.log(result);

// const data = [
//   {
//     country: 'Russia',
//     city: 'Saint Petersburg',
//     hotel: 'Hotel Leopold',
//   },
//   {
//     country: 'Spain',
//     city: 'Santa Cruz de Tenerife',
//     hotel: 'Apartment Sunshine',
//   },
//   {
//     country: 'Slowakia',
//     city: 'Vysokie Tatry',
//     hotel: 'Villa Kunerad',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hostel Friendship',
//   },
//   {
//     country: 'Indonesia',
//     city: 'Bali',
//     hotel: 'Ubud Bali Resort&SPA',
//   },
//   {
//     country: 'Netherlands',
//     city: 'Rotterdam',
//     hotel: 'King Kong Hostel',
//   },
//   {
//     country: 'Marocco',
//     city: 'Ourika',
//     hotel: 'Rokoko Hotel',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hotel Rehberge Berlin Mitte',
//   },
// ];

// function search(place) {
//   for (let i = 0; i < data.length; i++) {
//     if (`${data[i].country}${data[i].city}${data[i].hotel}`.includes(place)) {
//       const { country, city, hotel } = data[i];
//       const location = `Страна: ${country}, город: ${city}, отель: ${hotel}`;
//       console.log(location);
//     }
//   }
// }
// search('Rotterdam');

const palindrome = (str) => str === str.split('').reverse().join('');

console.log(palindrome('sos'));

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

const searching = (place) => {
  const result = hotels.filter((location) =>
    Object.values(location).includes(place),
  );
  console.log(result);
};
searching('UK');

const getCountries = (object, hotels) => {
  if (!Object.hasOwn(hotels.country)) {
    object[hotels.country] = [];
  }
  object[hotels.country].push(hotels.city);
  return object;
};
const uniqueCountries = hotels.reduce(getCountries, {});
console.log(uniqueCountries);
