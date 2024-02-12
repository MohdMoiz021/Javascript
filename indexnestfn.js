// Nested Functions in Javascript
// A nested function is a function within another function. It can access the variables of its parent function
// A nested function is a function inside another function.

function add(){
    console.log("Hello")
    function add2(){
        console.log("Inner function")
    }
    function add3(){
        console.log("World")
    }
    // The SCOPE of add2 and add3 is only in this block we cannot call globally as it shows undefined
    // The inner functions should be called within the main function 
    // to execute them.
    add2();
    add3();
}
add()
