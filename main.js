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
