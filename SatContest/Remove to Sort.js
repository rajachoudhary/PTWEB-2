function runProgram(input){
    input = input.split("\n")
    let N = +input[0]
    let arr = input[1].split(" ").map(Number)
    let output = []
    output.push(arr[0])
    for (let i = 0; i < N; i++) {
       if(arr[i] > output[output.length-1]){
           output.push(arr[i])
       }  
        
    }
    console.log(output.join(" "));
}
runProgram(`10
1 2 4 3 5 7 8 6 9 10`)