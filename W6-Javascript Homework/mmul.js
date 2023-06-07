//Write a function for multiplying matrices mmul(a,b) and test

function mmul(A, B) {
    if (A[0].length !== B.length) {
      console.log("Error cannot be multiplied");
      return;
    }
 
    const result = [];
    for (let i = 0; i < A.length; i++) {
      result[i] = [];
      for (let j = 0; j < B[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < A[0].length; k++) {
          sum += A[i][k] * B[k][j];
        }
        result[i][j] = sum;
      }
    }
  
    return result;
  }
let x=[[1,1,1],[1,1,1]]
let y=[[1,1,1],[1,1,1],[1,2,3]]
console.log(mmul(x,y));