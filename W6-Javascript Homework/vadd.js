//Write a function for vector addition vadd(a,b) and test
function vadd(A, B) {
    if (A.length !== B.length) {
      console.log("Error!not the same length");
      return;
    }
    const result = [];
    for (let i = 0; i < A.length; i++) {
      result[i] = A[i] + B[i];
    }
    return result;
  }
  let x=[1,1,1]
let y=[1,1,1]
console.log(vadd(x,y));