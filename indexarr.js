// Arrays in javascript
// 1. Declaration of array
let arr = [5,6,7];
console.log(arr);
// Accessing elements using index
console.log("Accessing element by Index : ", arr[0]);
// Length property
console.log("Length of the array: ", arr.length)
// Adding new element to an array using push() method
arr.push(8);
console.log("Array after adding a new element: ", arr);
// Removing element from array using pop() method
arr.pop();
console.log("Array after removing last element: ", arr);   
// Using shift() method for removing first element
arr.shift();
console.log("Array after removing first element: ", arr);
// Unshifting - adding element at beginning using unshift() method
arr.unshift(4);
console.log("Array after adding element at beginning: ", arr);
// Sorting an array
arr.sort((a,b)=>a-b);
console.log("Sorted array: ", arr);
// Reversing an array
console.log("Reverse of the array: ", arr.reverse());
// Joining elements of an array into a string
let str= arr.join(",");
console.log("Elements joined as String: ",str);
// Splitting a string into an array using split() method
let splittedArr= "Hello,World".split(",");
console.log("Splitted string into array: ",splittedArr);
// Checking if an element is present in an array using includes() method
console.log("Is 6 present in the array? ", arr.includes(6));
// Searching for an element's index in an array using indexOf() method
console.log("Index of 6 in the array: ", arr.indexOf(6));
// Searching for an element's last index in an array using lastIndexOf() method
console.log("Last Index of 6 in the array: ", arr.lastIndexOf(6));
console.log(arr)
    // Splicing an array
    let removedElement = arr.splice(0,2);
    console.log("Removed Elements: ",removedElement);
    console.log("After splicing the array: ", arr);
   

    // 2D array
     var arr3=[[1,2,3],
               [4,5,6]]
    console.log("2D Array: \n",arr3);
    console.log(arr3[0][2])