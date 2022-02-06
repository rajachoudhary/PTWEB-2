function runProgram(input){
    input = input.split("\n")
    let T = +input[0]
    let line = 1
    for(let i=0; i<Number.MAX_VALUE; i++){
        let N = +input[line++]
        let arr = input[line++].split(" ").map(Number)

        let arr1 = []
        let sum = 0
        for(let j=0; j<arr.length; j++){

           if(j===0){
               sum = i-arr[j]
           } else {
               sum = sum + arr[j]
           }
            if(sum < 1){
                break
            } else {
                srr1.push()
            }
        }
      
       
    }
}
runProgram(`3
5
-3 2 -3 4 2
2
1 2
3
1 -2 -3`)