function runProgram(input){
    input = input.split("\n")
    let N = +input[0]
    let vowels = ["a","e","i","o","u"]
    
    for(let i=1; i<=N; i++){
        let str = input[i]
        let vowelStr1 = ""
        let constStr2 = ""
        for(let j=0; j<str.length; j++){
            let count = 0
            for(let k=0; k<vowels.length; k++){
                if(str[j] === vowels[k]){
                    vowelStr1+=str[j]
                    count++
                    break;
                } 
            }
            if(count === 0){
                constStr2+=str[j]
            }
        }
        console.log(vowelStr1+constStr2)
    }

}
runProgram(`1
masaischool`)