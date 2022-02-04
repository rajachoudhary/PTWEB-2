function tribonacci(N){
    if(count >= N){
        return 
    }
    if(count === 0){
        return 0
    } else if (count === 1 || count === 2){
        return 1
    } else {
        return tribonacci(count) + tribonacci(count+1) + tribonacci(count+2)
    }
}

function runProgram(input){
    input = input.split("\n").map(Number)
    
    let T = +input[0]
    for(let i=1; i<=T; i++){
        let N = +input[i]
        let count = 3
        let output = tribonacci(N, count)
        console.log(output)
    }
}
runProgram(`1
4`)