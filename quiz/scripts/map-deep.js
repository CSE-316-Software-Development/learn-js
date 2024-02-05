// Original matrix (list of lists)
const originalMatrix = [
    [3, 2, 1],
    [4, 5, 6],
    [7, 9, 8]
  ];
  
  const newMatrix = originalMatrix.map((row) => {
    return row.sort();
  });
  
  // Modifying the original matrix (changing the last element of the first row)
  originalMatrix[0][2] = 99;
  
  // Displaying the original and new matrices
  console.log('Original Matrix (modified):', originalMatrix);
  console.log('New Matrix (unaffected):', newMatrix);

  // change the original array would change the new array as the map returns a shallow copy
    // and the reference is pointed to the changed original array

    const newDeepMatrix = originalMatrix.map((row) => {
        return [...row].sort(); // doing a shallow copy of each row
    })

    originalMatrix[0][2] = 55;

    console.log('Original Matrix (modified):', originalMatrix);
    console.log('newDeepMatrix (unaffected):', newDeepMatrix);