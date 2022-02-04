function runProgram(input){
    input = +input
    
    let height = 0
    let sum  = 0
    let add = 0

    for (let i = 1; i <= input; i++) {
        sum += i
        add += sum
        height++
        if(add > input){
           --height
            break;
        }
    }
    console.log(height)

}
runProgram(`25`)