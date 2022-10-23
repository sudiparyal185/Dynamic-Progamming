//memoization
// Use JS object with keys as args to function, value is return value
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// Brute Force
// const fib = (n) => {
//   if (n === 1 || n === 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

console.log(fib(50));
