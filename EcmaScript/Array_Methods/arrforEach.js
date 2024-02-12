//forEach array method

//The forEach() method creates a loop that iterates over each element in the array. It is called on an object and passed a callback function to execute on each iteration. The callback function takes//map array method

const fruits=["apple","orange","cherry"];
fruits.forEach(function(currentValue,index,arr){
    console.log(`${currentValue} is at index ${index}`);});