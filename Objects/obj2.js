var stud={
    name:'Moiz',
    age:21,
    gender:'Male',
    City:'Hyderabad'
};

console.log(stud)

//accessing the properties of an object using dot notation 
console.log("Name : "+stud.name);
console.log("Age : "+stud.age);     // OR     
console.log("City "+stud["City"])

// If we declare a var then we can only access using [] we cant use .
var x="gender"
console.log("Gender is :"+stud[x]);   // Output -> Gender is Male
console.log(stud.prop) // Ouput - > Would be undefined