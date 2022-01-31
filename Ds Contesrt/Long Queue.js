function runProgram (input){
    input = input.split("\n")
    let N = Number(input[0])
    let arr = input[1].split(" ").map(Number)
    let count = 1

    for(let i=0; i<N; i++){

        if(arr[i] > arr[i+1]){
            count++
        }
    }
    console.log(count);
}
runProgram(`6
1 2 4 3 5 8`)