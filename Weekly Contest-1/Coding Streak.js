function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  
    let X = 0
    for (let i = 1; i <= N; i++) {
        
        let str = input[i];
        let count = 0;
        let conutMaxC = 0;

        for (let j = 0; j < str.length; j++) {

            if (str[j] === "C") {
                count++;
            }

            if (count > conutMaxC) {
                conutMaxC = count; 
            }

            if (str[j] != "C") {
                count=0;
            }

        }

        if(conutMaxC > X){
            X = conutMaxC
        }

    }

    let k=1

    let Y = 0
    while(k<N){
        let str1 = input[k]
        let str2 = input[k+1]
        let right = str1.length-1;
        let left = 0
        let countY = 0
        while(right >=0 && left<str2.length){
            if(str1[right] === "C"){
                
                countY++
                right--
            }
            if(str2[left] === "C"){
                console.log(str2[left])
                left++
                countY++
            }
            if(str1[right] != "C" && str2[left] != "C"){
                break;
            }
        }
        if(countY > Y){
            Y = countY
        }
        k++
    }

    // console.log(`${X} ${Y}`)
}
runProgram(`4
SSSSEEEECCCCEECCCC
CCCCCSSSSEEECCCCSS
SSSSSEEESSCCCCCCCS
EESSSSCCCCCCSSEEEE`);
