//First One is called isEven()
/**
*Write a function isEven() which takes a single numeric argument
*and returns true if the number is even, and false otherwise.
**/

function isEven(number){
  if (number % 2 == 0){
    return true;
  }else{
    return false;
  }
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);
