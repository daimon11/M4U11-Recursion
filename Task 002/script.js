let arrNum = [];

const guessNumber = (arr) => {
  let randomNum = parseInt(Math.random() * 10);
  arr.push(randomNum);
  let result = arr.reduce((sum, current) => sum + current, 0);
  if (result > 50) {
    return arr;
  } else {
    return guessNumber(arr);
  };
}

console.log(guessNumber(arrNum));
