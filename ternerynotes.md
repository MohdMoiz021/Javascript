// Ternery Operator
// Conditional operator in JavaScript is called the ternary operator. It allows us to write a
// shorter version of an if-else statement. The syntax for this operator is: condition ? expr
// if true : expr if false;
let x = 10;
console.log(x > 5 ? "Greater than 5" : "Less than or equal to 5");
// Logical AND (&&) and OR (||) operators
// In JavaScript, logical AND operator returns true only when both operands are true. If any one
// of them is false, it will return false.
// Similarly, logical OR operator returns true whenever at least one of the operand is true. If
// all operands are false then it will return false.
let num1 = 23;
let num2 = 46;
if ((num1 < 20 || num1 > 30) && (num2
< 20 || num2 > 30)) {
console.log("At least one number is out of range.");
} else {
console.log("Both numbers are within the given range.");
}
// Assignment operators
// There are several assignment operators available in JavaScript like +=,-=,_=/= etc. Let
// see some examples below:
let a = 7;
let b = 9;
a += b; // Now value of 'a' becomes 16
console.log(a); // Outputs: 16
a -= b; // Now value of 'a' becomes 9
console.log(a); // Outputs: 9
a _= b; // Now value of 'a' becomes 81
console.log(a); // Outputs: 81
a /= b; // Now value of 'a' becomes approximately 7.07
console.log(a); // Outputs: 7.07
// Bitwise operators
// These operators perform bit by bit operation on their operands. They don’t work on
// regular values but rather on integers represented as strings. For example, we can use
// & to find common set bits between two numbers. Here is how you do that:
let c = 10;
let d = 7;
console.log((c & d)); // Outputs: 2
// | finds union of sets i.e., gives us the unique elements present in either of
// the sets.
console.log((c | d)); // Outputs: 10
// ^ calculates the symmetric difference of two sets i.e., gives us the unique
// elements present in either of the sets not present in both.
console.log((c ^ d)); // Outputs: 3
// ~ is unary operator which returns the complement of the binary representation of
// its operand. It flips each bit of the input.
console.log(~d); // Outputs -8
// << and >> shift the bits of the number to the left or right respectively. The
// number of positions to shift is specified in the second operand. Positive value
// shifts to the right and negative value shifts to the left.
console.log(c<<1); // Outputs 18
console.log(c>>1); // Outputs 5
