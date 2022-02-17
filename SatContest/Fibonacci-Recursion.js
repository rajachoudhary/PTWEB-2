function fibonacciRecursion(N){

    if( N <= 0){
        return 0
    } else if (N === 1){
        return 1
    } else{
        return fibonacciRecursion(N-1) + fibonacciRecursion(N-2)
    }
}

function runProgram (input){
    input = + input
    const output = fibonacciRecursion(input)
    console.log(output);
}
runProgram(`4`)