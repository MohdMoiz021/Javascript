// Exception Handling
// Compile time errors and run time errors

// function addArr(arr) {
//     var sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])){
//         sum += addArr(arr[i]);
//     }else{
//         sum+=arr[i]
//     }
//     return sum;
// }
// }
// function add(a, b) {
//     if (Array.isArray(a)) a = addArr(a);
//     if (Array.isArray(b)) b = addArr(b);

//     if (typeof a === 'function') a = a();
//     if (typeof b === 'function') b = b();
//     console.log(a + b);
// }

// // add([1, 2, 3], [4, 5, 6]);
// add([1, 2, [1, 1, 1, [1, 1, 1, [1, 1, 1]]]], [4, 5, 6]);


function nestedArraySum(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        sum += nestedArraySum(arr[i]);
      } else {
        sum += arr[i];
      }
    }
    return sum;
  }

  function add(a, b) {
    if (Array.isArray(a)) a = nestedArraySum(a);
    if (Array.isArray(b)) b = nestedArraySum(b);
    if (typeof a === 'function') a = a();
    if (typeof b === 'function') b = b();
    console.log(a + b);
}
  const nestedArray = [1, 2, [1, 1, 1, [1, 1, 1, [1, 1, 1]]], [4, 5, 6]];
  const result = nestedArraySum(nestedArray);
  console.log(result);
  
 
