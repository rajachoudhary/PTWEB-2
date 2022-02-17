function superDigit(arr) {
//   console.log(arr);

  if (arr.length === 1) {
    return arr.join("");
  } 
  else {
    const value = arr.reduce((el, acc) => el + acc);
    const valueSRing = value.toString()
    const valueSplit = valueSRing.split("").map(Number)
    // console.log(valueSplit);
    return superDigit(valueSplit);
  }
}

function runProgram(input) {
  input = input.split("\n");
  const T = input[0].split(" ").map(Number);
  let line = 1;

  for (let i = 0; i < T; i++) {
    let N = input[line++];
    let arr = N.split("").map(Number);
    const output = superDigit(arr);
    console.log(output);
  }
}
runProgram(`3
45
8
186`);
