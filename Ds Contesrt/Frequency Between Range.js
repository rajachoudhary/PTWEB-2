function runProgram(input){
    input = input.split("\n")
    let nq = input[0].split(" ").map(Number)
    let N = nq[0]
    let Q  = nq[1]
    let arr = input[1].split(" ").map(Number)
    let line = 2
    for(var i=0; i<Q; i++){

        let range = input[line++].split(" ").map(Number)
        let left = range[0]-1
        let right = range[1] 
        let value = range[2]
        let count = 0
        for(let j=left; j<right; j++){

            if(arr[j] === value){
                count++
            }
        }
        console.log(count);
    }
}
runProgram(`6 2
1 5 3 2 3 2 
3 6 2
4 4 2`)