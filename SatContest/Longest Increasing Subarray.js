function runProgram(input){
    input = input.split("\n")
    let T = +input[0]
    let line = 1
    for(let i=0; i<T; i++){
        let N = +input[line++]
        let arr = input[line++].split(" ").map(Number)
        let count = 1
        let maxlength = 1
        for(let j=0; j<arr.length-1; j++){

            if(arr[j] < arr[j+1]){
                count++
                if(count > maxlength){
                    maxlength = count
                    
                } 
                
            } else {
               
                    count = 1
                
            }
        }
        console.log(maxlength)
    }
}
runProgram(`1
7
62 62 32 1 12 18 81`)