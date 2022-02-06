function runProgram(input){
    input = input.split("\n")
    let T = +input[0]
    let line = 1
    for(let i=0; i<T; i++){
        let N = +input[line++]
        let arr = input[line++].split(" ").map(Number)
       let count = 0
        for(let j=0; j<arr.length-1; j++){
            let subArr = [arr[j]]
            for(let k=j+1; k<arr.length; k++){
                subArr.push(arr[k])
                // let count0 = 0
                // let count1 = 0
                // for(let l=0; l<subArr.length; l++){
                //     if(subArr[l] === 0){
                //         count0++
                //     } else if (subArr[l] === 1){
                //         count1++
                //     }
                // }
               
                
                // if(count0 === count1){
                //     if(subArr.length > count){
                //         count = subArr.length
                //     }
                // }
            }
            

        }
        
        console.log(count)
    }
}
runProgram(`1
5
1 0 0 1 0`)