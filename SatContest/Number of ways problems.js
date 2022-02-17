function numberOfWays(N){
    if( N === 0){
        return 1
    }else if(N < 0){
        return 0
    }
     else{
       return  numberOfWays(N-1) + numberOfWays(N-2) + numberOfWays(N-3)
    }
}

function runProgram(input){
    input = +input
    // const output = numberOfWays(input)
    console.log(input);
}
runProgram(`10`)