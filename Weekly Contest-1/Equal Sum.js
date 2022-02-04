function runProgram(input){

    input = input.split(" ").map(Number)
    let sum1 = input[0]+input[1]
    let sum2 = input[2]+input[3]
    let sum3 = input[0]+input[2]
    let sum4 = input[1]+input[3]
    let sum5 = input[0]+input[3]
    let sum6 = input[1]+input[2]

    if(sum1 === sum2 || sum3 === sum4 || sum5 === sum6){
        console.log("Yes")
    } else {
        console.log("No")
    }
    
}
runProgram(`8 4 2 4`)