//Write the Fibonacci sequence fibonacci(n) using recursion
function fibonacci(x) {
    if (x === 1 || x===0) {
      return x;
    } else {
      return fibonacci(x - 1) + fibonacci(x - 2);
    }
  }
  //change the number below to find the fibonacci
  console.log(fibonacci(19));
  //change the number above