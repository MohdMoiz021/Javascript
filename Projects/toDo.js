let todo=[]

var q=prompt('Please enter your request')
console.log(q);
while(true){
    if(req=="quit"){
        console.log("Quitting App")
        break
    }
    if(req=="list"){
        console.log("---------------")
        for(task of todo){
            console.log(task)
        }
        console.log("----------------")
    }else if(req=='add'){
        var task_name = prompt("Enter the name of the task: ")
        todo.push(task_name)
        console.log("Task Added")
    // }else if(req=='Delete'){
    //     todo.pop()
    // }
}
}
console.log(req)