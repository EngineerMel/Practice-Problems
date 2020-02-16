/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

// if num < high subtract down
// and multiply and when num = 0
// we stop the function

function factorial(sumNum) {
  if (sumNum < 0) return -1;
  else if (sumNum == 0) return 1;
  else return sumNum * factorial(sumNum - 1);
}

factorial(7);
