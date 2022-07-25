let arrNum = [];

const guessNumber = (arr) => {
  let randomNum = parseInt(Math.random() * 10);
  arrNum.push(randomNum);
  let result = arrNum.reduce((sum, current) => sum + current, 0);
  if (result > 50) {
    return arrNum;
  } else {
    return guessNumber();
  };
}

console.log(guessNumber());
