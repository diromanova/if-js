let user = 'John Doe';
console.log(user);

const student = 'Diana Linkova';
console.log(student);

user = student;
// user = Diana Linkova
console.log(user);

let test = 1;
test = test + 1;
test = test + '1';
// test = 1;
// test = 2;
// test = 2 + '1' = "2" + "1" = "21";
console.log(test);

test = test - 1;
// test = 20;
console.log(test);

test = Boolean(test);
// test = true;
console.log(test);

const arrayOne = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < arrayOne.length; i++) {
  result = result * arrayOne[i];
}
console.log(result);

const arrayTwo = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrayTwo.length; i++) {
  if (arrayTwo[i] > 5 && arrayTwo[i] < 10) {
    console.log(arrayTwo[i]);
  }
}

const arrayThree = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrayThree.length; i++) {
  if (arrayThree[i] % 2 == 0 && arrayThree[i] != 0) {
    console.log(arrayThree[i]);
  }
}
