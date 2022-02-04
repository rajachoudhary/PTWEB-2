function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].split(" ").map(Number);
  arr.sort((a, b) => a - b);

  let T = +input[2];
  let line = 3;
  for (let i = 0; i < T; i++) {
    let K = +input[line++];
    let count = 0;
    let value = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > K) {
          value = arr[j]
        count++;
        break;
      }
    }
    if(count >0){
        console.log(value)
    } else{
        console.log(-1)
    }
  }
}
runProgram(`10
13 89 81 66 81 63 71 76 73 81
2
65
15`);
