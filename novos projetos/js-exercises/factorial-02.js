//Second one is Factorial()
/**
*write a function Factorial() wich takes a single numeric argument
*and returns the factorial of that number
*Note: 4! is 4x3x2x1 / 6! is 6x5x4x3x2x1. and 0! equals 1.**/

function factorial(x){
  if(x == 0){
    var exibeResultado = "The factorial of " + x + " equals " + 1;
    //var factorialResult = 1;
    //returns factorialResult;
    console.log(exibeResultado);
  }else{
    var factorialResult = x;
    var armazenaX = x;
    while (x > 1) {
      x--;
      factorialResult = factorialResult * x;
    }
    var exibeResultado = "The factorial of " + armazenaX + " equals " + factorialResult;
    //return factorialResult;
    console.log(exibeResultado);
  }

}
