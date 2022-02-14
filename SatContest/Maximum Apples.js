function runProgram(input){
    input = input.split("\n")
    let nw = input[0].split(" ").map(Number)
    let N = nw[0]
    let W = nw[1]
    let arr = input[1].split(" ").map(Number)
    arr.sort((a,z)=> a-z)
    
    let sum = 0;
    let count1 = 0
    for (let i = 0; i < N; i++) {
        let count = 0
       

       
        
        if(W > arr[i]){
            W -= arr[i]
            count++
            
        }
        if(count > 0){
            count1++
        }
    }
    console.log(count1);

}
runProgram(`4 20
3 10 4 4`)