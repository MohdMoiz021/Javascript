// Conditional Statements 
// If statement
// if (condition) {
//     // code block to be executed if the condition is true
//     } else {
//         // code block to be executed if the condition is false
//         }
        
//         // Switch case statement
//         switch(expression) {
//             case value1:
//                 // code block for when expression matches value1
//                 break;
//                 case value2:
//                     // code block for when expression matches value2
//                     break;
//                     default:
//                         // code block for when none of the values match
//                         // it's optional and usually placed at the end
        
// REAL CODE
var marks=12;
if(marks>=50){
    console.log("Pass");
}
// O/p: Pass
// If cond doesn't satisfy it will print nothing 
// If else statement
var mark=60
if(mark>=60){
    console.log("Distinction")
    }else{
        console.log("No Distinction")
        }
// o/p: Distinction
function calc(agg){
      
        console.log("Aggregate is "+agg);
            if (agg>=50){
            console.log("Grade is Pass");
            }else{
                console.log("Fail");
                }
            }
            calc(78)
                /*
                Output will be : Aggregate is 78
                Grade is Pass
                */