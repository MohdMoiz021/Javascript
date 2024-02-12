// function fact(n){
//     if(n===1) return 1;
//     return n*fact(n-1);
// }
// console.log("5! = "+fact(5)); // Output: "5! =


function fact(n){
    if(n===1) return 1
    return n*fact(n-1)
}
res=fact(5)
console.log(fact(5));