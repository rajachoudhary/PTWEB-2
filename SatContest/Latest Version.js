function runProgram(input){
    input = input.split("\n")
    const version1 = input[0].split(".").map(Number).join("")
    const version2 = input[1].split(".").map(Number).join("")
    if(version1 > version2){
        console.log("Version 2 is the latest.");
    } else if(version2 > version1){
        console.log("Version 1 is the latest.");
    } else {
        console.log("Both Versions are equal.");
    }
    
}
runProgram(`1.0.33
1.0.21`)