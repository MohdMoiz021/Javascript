// Recursion in js
// A recursive function is a function that calls itself during its own execution.
/*
Recursive functions are used to solve problems that can be broken down into simpler, similar sub-problem
Problems where the solution depends on solutions to smaller instances of the same problem are good candidates for recursion
Problems where the solution depends on solutions to smaller instances of the same problem are good candidates for recursion
Problems where the solution depends on solutions to smaller instances of the same problem. Examples include:
1) Factorial calculation (5! = 4*3*2*1):
factorial(n) => n * factorial(n - 1)
2) Calculating the sum of all numbers from 0 to N:
sumN(n) => n + sumN(n - 1) if n >=
*/
// function fact(n) {
//     // base condition
//     if (n === 1) return 1;

//     return n * fact(n - 1);
// }

// var res = fact(10);
// console.log(res);



function fact(n){
    if(n===1) return 1;
    return n*fact(n-1)

}

console.log(fact(5))