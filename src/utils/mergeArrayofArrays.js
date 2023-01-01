const arrayOfArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const combinedArray = arrayOfArrays.reduce((acc, val) => acc.concat(val), []);

console.log(combinedArray);
