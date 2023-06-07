//Write a repeat(f,n) function that puts the results of calling f n times into an array and returns. Then return 10 random numbers with repeat(Math.random, 10)
function repeat(f, n) {
    const result = Array(n);
    for (let i = 0; i < n; i++) {
      result[i] = f();
    }
    return result;
  }
  console.log(repeat(Math.random,10));