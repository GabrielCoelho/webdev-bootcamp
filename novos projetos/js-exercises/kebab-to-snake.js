//The Third problem.
/**
*write a function kebabToSnake() wich takes a single kebab-cased
*string argument and returns the snake_cased version.
**/
function kebabToSnake(changeString){
  var newString = changeString.replace(/-/g, "_");
  return newString;
}
