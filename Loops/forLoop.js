// For Loop
// The for loop is used to iterate over a range of values. It takes three parameters: the
// Initilization
// Conditonal
// Increment
// statement, which are executed at the beginning and after each iteration through
// the loop respectively.




// for(i=1;i<=10;i++){
//        console.log(i)  
// }

// For Loop
// For loop has 3 conditons
// Initialization - The value at which the loop starts, executed once before the loop begins
//for(i=0) initialization acts a loop starter before the loop begins
//for(i<=10) condition states that we have stop on a certain point
// why we use i++ in loops?
/* When you increment by one it means that after each iteration of the loop, the counter will increase
*/

// function isEven(n){
//     if(n%2===0){
//         return true;
//     }else return false;
// }
// res=isEven(8)
// console.log(res);

// function isEven(n){
//     return n%2!==0;
// }
// res=isEven(91)
// console.log(res);

// function isOdd(n){
//     if(n%2!==0)
//         return true
//     else return false
// }
// console.log(isOdd(8));
// var n=3;
// if(n%2===0)
//     console.log(true);
// else console.log(false);

// Even Number 
// Declaring n 
// var n=2;
// // Using conditional statement if 
// if(n%2==0)
// console.log(true)
// else
// console.log(false)

// // Odd Number 

// var n=3
// if(n%2!==0)
// console.log(true);
// else
// console.log(false)

// function isEven(n){
//     return n%1===0
// } 
// res=isEven(3)
// console.log(res);

function isPrime(n) {
    if (n === 1) return false;
    
    // var upper = parseInt(Math.sqrt(n));
    for (var i = 2; i <= n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

console.log(isPrime(5))