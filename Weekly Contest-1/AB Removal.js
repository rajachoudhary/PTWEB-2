function runProgram(input){
    input = input.split("\n")
    let N = +input[0]
    let str = input[1]
    let stack = []
    for (let i = 0; i < N; i++) {
        if(stack.length === 0){
            stack.push(str[i])
        } else {
            if(stack[stack.length-1] === "A" && str[i] === "B"){
                stack.pop()
            } else {
                stack.push(str[i])
            }
        }
        
        
    }
    console.log(stack.length)

}
runProgram(`6
BAABAA`)