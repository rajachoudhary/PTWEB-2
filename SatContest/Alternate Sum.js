function runProgram(input){
    input = input.split("\n")
    let N = +input[0]
    let arr = input[1].split(" ").map(Number)
    let sum = 0
    for (let i = 0; i < N; i++) {
        sum += arr[i]
        i++
        
    }
    console.log(sum);
}
runProgram(`7
4 5 5 5 6 6 7`)