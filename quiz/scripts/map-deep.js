// Original matrix (list of lists)
const originalMatrix = [
  [3, 2, 1],
  [4, 5, 6],
  [7, 9, 8]
];

// Create a deep copy of originalMatrix
const deepCopyMatrix = JSON.parse(JSON.stringify(originalMatrix));

const newMatrix = originalMatrix.map((row) => {
  return row.sort();
});

// Modifying the original matrix (changing the last element of the first row)
originalMatrix[0][2] = 99;

// Displaying the original and new matrices
console.log('Original Matrix (modified):', originalMatrix);
console.log('New Matrix (unaffected):', newMatrix);
console.log('Deep Copy Matrix:', deepCopyMatrix);
