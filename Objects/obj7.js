// Creating Objects using Object.create()
var m=Object.create({},{
   pi:{
    value:3.14,
    writable:false,
    // What is enumerable
    enumerable:true,
    configurable:true
    
   },
   width:{
    value:5,
    writable:false,
   enumerable:true,
   configurable:true
   }
});
Object.defineProperty(m,'width',{
   writable:true,
})
m.width=100

console.log(m)

 // What is enumerable in Object.create()
 // If we set enumerable to true it will be shown when we use for...in loop or
 // Object.keys() method
 
 // If a property has the enumerable attribute set to true it will be shown when we use for
 // Each loop or Object.keys() method
 // console.log("Enumerable properties")
 //  Object.keys(m).forEach(function(key){