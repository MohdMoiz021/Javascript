// Filter Method directly filters the numbers in the array by seeing the condition 

let nums=[1,2,3,4,5,6];

let even=nums.filter((num)=>
(num%2==0))
console.log(nums);
console.log(even); //[2, 4, 6]