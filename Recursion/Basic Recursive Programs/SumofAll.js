function sumRange(num){
    if(num===1) return 1
    return num+sumRange(num-1)
}

var output=sumRange(3)
console.log("The sum of the numbers from 1 to "+output+" is: ",sumRange(output))