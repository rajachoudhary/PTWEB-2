function runProgram(input){
    input  = input.split("")
   let obj = {}

    for (let i = 0; i < input.length; i++) {

        if(obj[input[i]]){
            obj[input[i]]++
        } else{
            obj[input[i]] =1
        }

    }
   
    let str = ""
    for (const key in obj) {
         str += key
    }
    console.log(str)
}
runProgram(`iloveprogramming`)