function root(N, M, prod ) {
  if (prod >= M) {
    return 
  }
 
   else {
//    console.log(prod*N);
    return 1+ root(N,M,prod*N)
  }
}

function runProgram(input) {
  input = input.split("\n");
  let N = Number(input[0]);
  let line = 1;
  for (let i = 0; i < N; i++) {

    let arr = input[line++].split(" ").map(Number);
    let prod = 1
    let output = root(arr[0], arr[1],prod);
    console.log(output);
  }
}
runProgram(`3
2 9
6 4096
3 126`);

