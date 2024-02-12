// Switch Statement
// The switch statement is used to perform different actions based on the value of a variable. It works
// by comparing the given expression with multiple values (called case labels) until it finds one that matches
// by comparing the given expression with multiple values (called case labels) until it finds one that matches
// by comparing the provided expression (often called the "value") with multiple values, and then
// executing code blocks associated with each matching value. If no cases match, an optional default
// action can be executed. Here's how it looks:
// switch (expression) {
//     case value1:
//         // Code block for when expression equals value1
//         break;
//         case value2:
//             // Code block for when expression equals value2
//             break;
//             /* ... */
//             default:
//                 // Code block for when none of the above cases are true
//                 }
                // A common use for the switch statement is in menu-driven programs where the user selects
                // an option from a list presented to them. In this example, we have a simple program
var agg=50;

switch(agg){
    case 70:
        console.log("Distinction");
        break; // break is used to stop the loop and get out from the loop
    case 50:
        console.log("First Class");
        break;
     case 40:
        console.log("Second class")
        break;
    case 30:
        console.log("Third class");
        break;
    default:
        console.log("Failed");
        break;
        }
// The Drawback of switch statement is we have to take accurate values like if we have case 70,60,50 
// but our input is 70.1 so it will not work properly. So, there
// is a chance that the developer may forget about one number or any other number. That’s
// why some developers prefer using if...else statements instead of switch statements.
                
