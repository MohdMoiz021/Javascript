var stud={
    name:'Moiz',
    age:21,
    gender:'Male',
    City:'Hyderabad'
};
console.log(stud);
//accessing the properties of an object using dot notation 
console.log("Name : "+stud.name);
console.log("Age : "+stud.age);
//using bracket notation to access property
var key = 'gender';
console.log("Gender : "+stud[key]);
//adding a new property in the object
stud['Country']='India';
console.log("Country : "+stud.Country);