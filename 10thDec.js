/*
Requirements: "1) Given an array having 0,1 as input. We need to write a function that sorts the array in ascending order without using inbuilt sort function
Input Array -> [0,1,1,0,1,0,0,1]
Output -> [0,0,0,0,1,1,1,1]

Logic:-

[0,1,1,0,1,0,0,1]
 i             j


*/



function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;

}


function separate(arr){
    let i=0;
let j=arr.length-1;


while(i<j){
    if(arr[i]==1){
        
        swap(arr,i,j)
        j--
    }
    else i++

    }
    return arr
}



console.log(separate([1,0,1,1,1,0,0,0,1,0]))


/* Q2.Given 2D Array. A Magic square is a 2D array having n rows and n columns which
will be having all elements as distinct and the sum of row, column or diagonal is equal to the same number.
You need to check whether that array is a magic square or not.

*/

function isMagicSquare(matrix) {
    // Check that the matrix is a square
    if (matrix.length !== matrix[0].length) {
      return false;
    }
  
    // Check that all elements are distinct
    const elements = new Set();
    for (let row of matrix) {
      for (let element of row) {
        if (elements.has(element)) {
          return false;
        }
        elements.add(element);
      }
    }
  
    // Calculate the sum of the elements in each row
    const rowSums = matrix.map(row => row.reduce((a, b) => a + b));
  
    // Calculate the sum of the elements in each column
    const columnSums = matrix[0].map((_, i) => matrix.reduce((a, b) => a + b[i], 0));
  
    // Calculate the sum of the elements in the main diagonal
    const mainDiagonalSum = matrix.map((row, i) => row[i]).reduce((a, b) => a + b);
  
    // Calculate the sum of the elements in the secondary diagonal
    const secondaryDiagonalSum = matrix.map((row, i) => row[matrix.length - i - 1]).reduce((a, b) => a + b);
  
    // Check that all sums are equal
    return rowSums.concat(columnSums, mainDiagonalSum, secondaryDiagonalSum).every(sum => sum === rowSums[0]);
  }

  
  const matrix = [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2]
  ];
  
  if (isMagicSquare(matrix)) {
    console.log("The matrix is a magic square");
  } else {
    console.log("The matrix is not a magic square");
  }
  

