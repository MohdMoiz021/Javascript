// Add/Delete/Update the values in objects
//==============================
var stud={
    name:'Moiz',
    age:21,
    gender:'Male',
    City:'Hyderabad'
};
console.log("The name is "+ stud.name);
// Adding new values
stud['country']='India';
stud.class=12
stud.hobby="Reading";
stud["college"]="BMSC"
// Deleting the values
delete stud['gender'];
console.log(stud);
// Update values
stud.age = 23;
stud.City ="Delhi";
console.log(stud)

//Accessing object properties