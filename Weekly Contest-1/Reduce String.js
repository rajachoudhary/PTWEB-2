function runProgram(input){
    
    let stack = []

    for (let i = 0; i < input.length; i++) {
       if(stack.length === 0){
           stack.push(input[i])
       } else if(stack[stack.length-1] === input[i]){
           stack.pop()
       } else{
           stack.push(input[i])
       }
        
    }
    if(stack.length === 0){
        console.log("Empty String");
    } else {

        console.log(stack.join(""))
    }

}
runProgram("aaabccddd")