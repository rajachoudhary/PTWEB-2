function runProgram(input){
    input = input.split("\n")
    let N = +input[0]
    let count = 0
    for (let i = 1; i <=N; i++) {
        let str = input[i]
       
        for (let j = 0; j < str.length-1; j++) {
            
            if(str[j] === "T" && str[j+1] === "T" && str[j+2] === "T"){
                // console.log(str[j],str[j);
                count++
                j++
            }
        }
    }
    console.log(count*3+1);

}
runProgram(`5
TTTWW
TWWTT
TWWTT
TWTTT
WWTTT`)