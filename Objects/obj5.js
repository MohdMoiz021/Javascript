// Nested objects

var classInfo={
    Moiz:{
        name:'Moiz',
        age:20,
        city:'Hyd'
    },
    Imran:{
        name:'Imran',
        age:21,
        city:'Beng'

    },
    shahed:{
        name:'Shahed',
        age:23,
        city:'Noida'

    }
};
console.log(classInfo);
console.log(classInfo.Imran)
//Accessing nested object property
console.log(classInfo.shahed.city)
classInfo.shahed.city="Bengal"
console.log(classInfo.shahed.city)
classInfo.Imran.age=20
console.log(classInfo.Imran.age)