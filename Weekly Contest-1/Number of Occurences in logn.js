

function runProgram (input){
    input = input.split("\n")
    const nk = input[0].split(" ").map(Number)
    const N = nk[0]
    const K = nk[1]
    const count = 0
    const arr = input[1].split(" ").map(Number)
    const arrDevideBy2 = Math.floor(N/2)
    console.log(arrDevideBy2)
}
runProgram(`5 3
2 3 3 3 6 `)