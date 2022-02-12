function runProgram(input){
    input = input.split("\n")
    let T = +input[0]
    let line = 1

    for (let m = 0; m < T; m++) {
        let N = +input[line++]
        let arr1 = input[line++].split(" ").map(Number)
        let stack = []
        let arr = []
        let count1 = 0
        for (let i = 0; i < N; i++) {
            
            if(i === 0){
                for (let j = i+1; j < N; j++) {
                    
                    if(arr1[j] > arr1[i]){
                        stack.push(arr1[i])
                        arr.push(arr1[j])
                        count1++
                    }
                    
                }
                 if (count1 === 0) {
                    arr.push(-1)
                    stack.push(arr1[i])
    
                }
            } 
            else{
                let stackCount = 0;
                let arr1Count = 0;
                let K = stack.length-1;
                let L = i+1;
                while(K< stack.length || L < arr1.length){
                    
                    if(arr1[i] < stack[K]){
                        stackCount++
                        K--
                    } else{
                        K--
                    }
                    if(arr1[i] < arr[L]){
                        arr1Count++
                        L++
                    }
                    else {    
                        L++
                    }
                    // if(stackCount === arr1Count ){
                    //     arr.push(stack[K+1])
                    //     stack.push(arr1[i])
                    //     break;
                    // } 
                     if (stackCount > arr1Count){
                        arr.push(stack[K+1])
                        stack.push(arr1[i])
                        break;
                    } else if(stackCount < arr1Count){
                        arr.push(arr1[L-1])
                        stack.push(arr1[i])
                        break;
                    }
                }
            }
            
        }
        console.log(arr)
        
    }
}
runProgram(`1
5
5 4 1 3 2`)