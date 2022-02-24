function runProgram(input){
    input = input.split("\n")
    const N = +input[0]
    const arr = input[1].split(" ").map(Number)
    arr.sort((a,z)=>  a-z)
    
    const output = []
    for (let i = 0; i < N-1; i++) {
       
        output.push(arr[i+1])
        output.push(arr[i])
        i++
        
    }
    console.log(output);
    
    
}
runProgram(`10
9 8 4 10 3 6 5 7 1 2`)