function tribonacci(N,arr){
    
    if(N <= 0){
        
        return arr[N] = 0
    }
     else if (N === 1 || N === 2){
        return arr[N] = 1
    }
     else if (arr[N] !== -1){
        return arr[N]
    } 
    else {
        return  arr[N] = tribonacci(N-3,arr) + tribonacci(N-2,arr) + tribonacci(N-1,arr)
    }
}

function runProgram(input){
    input = input.split("\n").map(Number)
    
    let T = +input[0]
    for(let i=1; i<=T; i++){
        let N = +input[i]
       let arr = new Array(N+1).fill(-1)
        let output = tribonacci(N,arr)
        console.log(arr)
    }
}
runProgram(`1
4`)