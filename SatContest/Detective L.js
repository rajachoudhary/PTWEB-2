function runProgram(input){
    input = input.split("\n")
    let T = +input[0]
    let line = 1
    for (let i = 0; i < T; i++) {
       let rc = input[line++].split(" ").map(Number)
       let R = rc[0]
       let C = rc[1]
    //    console.log(R,C);
       let matrix = []
       for (let j = 0; j < R; j++) {
           let arr1 = input[line++].split(" ").map(Number)
           matrix.push(arr1)
           
       }
       let output = []
       for(k=0; k<C; k++){

        for (let l = 0; l < R; l++) {
           
            output.push(matrix[l][k])
        }
        let s = R-1
        for (let m = 1; m < C; m++) {
            output.push(matrix[s][m])
            
        }
        R--
       }
      console.log(output);

        
    }
}
runProgram(`2
3 3
1 2 3
4 5 6
7 8 9
4 3
1 2 3
4 5 6
7 8 9
10 11 12`)