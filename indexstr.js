// String is a complex Datatype
// It uses collection of characters
var str="abc"
console.log(str.length) // Length of String
var str2="xyz"
console.log(str+str2); // Concatention of String
console.log("Hello".toUpperCase());  // Convert to Uppercase
console.log("HELLO".toLowerCase())   // Convert to Lowercase
console.log("\n\r")                 // New Line and Carriage Return
// Methods available in String
/*
1. charAt() : Returns the character at specified index in string
2. indexOf(): Returns the first occurrence index of specified value, returns -1 if not found
3. lastIndexOf(): Returns the last occurrence index of specified value, returns -1 if not
found
4. split(): Breaks up a string into an array of substrings based on a specified separator
5. substr(): Extract part of a string from start index till end index (end index optional
    if not provided it consider till the end of the string).
    6. substring(): Same as SubStr but it doesnot accept negative values for start or end index
    7. toString(): This method will return the primitive value of the object.
    8. valueOf(): Returns the primitive value of the object.
    */
   var s = "This is a test string.";
   console.log(s.charAt(4));         // Output: i
   console.log(s.indexOf("is"));      // Output: 2
   console.log(s.lastIndexOf("t"));    // Output: 9
   console.log(s.split(" "))          // Output: ["This", "is","a", "test", "string."]
   console.log(s.substr(10,5));       // Output: string.
   console.log(s.substring(10));     // Output: string.
   console.log(s.toString());        // Output: This is a test string.
   console.log(s.valueOf());         // Output: This is a test string.
   