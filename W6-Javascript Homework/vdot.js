//Write a function for the vector inner product vdot(a,b) and test
function vdot(A, B) {
    if (A.length !== B.length) {
      console.log("Error!not the same length");
      return;
    }
    let result = 0;
    let c=0;
    for (let i = 0; i < A.length; i++) {
      c = A[i] * B[i];
      result=result+c;
    }
    return result;
  }
  let x=[1,1,1]
let y=[1,1,1]
console.log(vdot(x,y));