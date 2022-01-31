function runProgram(input){
    input = input.split("\n")
    let T = Number(input[0])
    let line = 1

    for(var i=0; i<T; i++){
        let N = Number(input[line++])
        let arr = input[line++].split(" ").map(Number)
        let minCount = arr[0]
        let maxCount = arr[0]
        let countMax = 0
        let countMin = 0
        for(let j=1; j<N; j++){

            if(maxCount < arr[j]){  
               maxCount = arr[j]
                countMax++
            } else if (minCount > arr[j]){
                minCount = arr[j]
                countMin++
            }
           
        }
        console.log(countMax + " " + countMin);
    }
}
runProgram(`2
9
10 5 20 20 4 5 2 25 1
10
3 4 21 36 10 28 35 5 24 42`)