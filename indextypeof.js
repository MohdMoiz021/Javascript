// Finding type of datatype
// Declaring a Integer varable
var x=10;
console.log("The data type of variable 'x' is : "+typeof(x));
// Checking if the given value is an integer or not
// For string datatype
var y="Hello World";
console.log("\n The data type of variable 'y' is: "+ typeof(y))
// Parseint is used for converting string to number 
var stringNumber = "42";
var integerNumber = parseInt(stringNumber, 10);
console.log(integerNumber); // Output: 42
// Type Conversions
console.log('\nType conversion');
console.log('Integer to String:'+String(56));
console.log('String to Integer:'+parseInt('78'));
console.log('Float to Integer:' + Math.floor(3.9));
var x='abc'
var y=parseInt(x)
console.log(y,x)
// Implicit Type Conversion
var num = 5;
var str = "Hello, world!";
var result = num + str;
console.log(result); // Output: "5Hello, world!"
// Explicit Type Conversion
var num = 5;
var str = "10";
var result = num + parseInt(str, 10);
console.log(result); // Output: 15


