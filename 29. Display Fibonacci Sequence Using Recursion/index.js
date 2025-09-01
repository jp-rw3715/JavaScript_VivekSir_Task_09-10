function fib(n) {
    return n < 2 ? n : fib(n-1) + fib(n-2);
  }
  let count = 7;
  for(let i=0; i<count; i++) console.log(fib(i));
  