// 'use' strict keyword
// The use strict directive is a JavaScript instruction that tells JavaScript to run in "strict mode".
// In strict mode, you can not, for example, use undeclared variables. If you try to do so, an error will be thrown at runtime.
// In strict mode, you can not, for example, use undeclared variables. If you try to do so, an error will be thrown at runtime. 
// In strict mode, you can not, for example, use undeclared variables. If you try to do so, it will throw an error.  
// In strict mode, writing errors will throw an error right away instead of silently continuing. 
/*
There are two types of modes strict mode and sloppy mode
sloppy mode will ignore the minor errors like undecalred variables and execute the program while 
strict mode will throw an error even */
// Example
'use strict'
// m1=10; This works fine in the normal mode but when we add use strict then it will through an error  m1 is not defined
var m1=10 // Now it works fine as I have declared the m1 as a variable
console.log(m1);

// function add(a,a)// When I use  this syntax without declaring b then also it works because JS engine automatically takes b = undefined// But if I don't declare m1 then also it will work because it is in slo
// Without Strict Mode
function add(a,b){
    console.log(a+b);
}
add(10,20)

// Use strict mode can be used in a single block without declaring it globally
// Migration
function newFn(){
    'use strict'
    var x =5;
    console.log(x);
}
newFn()
