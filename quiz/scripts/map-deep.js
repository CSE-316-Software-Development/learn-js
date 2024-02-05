// Original matrix (list of lists)
const originalMatrix = [
  [3, 2, 1],
  [4, 5, 6],
  [7, 9, 8],
];

// map, filter creates a shallow copy
// retaining the original array
// return row.sort();
// to
// return [...row].sort();
const newMatrix = originalMatrix.map((row) => {
  return [...row].sort();
});

// Modifying the original matrix (changing the last element of the first row)
originalMatrix[0][2] = 99;

// Displaying the original and new matrices
console.log("Original Matrix (modified):", originalMatrix);
console.log("New Matrix (unaffected):", newMatrix);

// ➜  learn-js git:(020124) ✗ node quiz/scripts/map-deep.js
// Original Matrix (modified): [ [ 3, 2, 99 ], [ 4, 5, 6 ], [ 7, 9, 8 ] ]
// New Matrix (unaffected): [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// ➜  learn-js git:(020124) ✗
