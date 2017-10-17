var number = Math.floor((Math.random() * 100) + 1);
console.log(number);
var guessed = false;
console.log(guessed);
while(!guessed){
    var guess = prompt("Guess a number " + number);

    if(guess < number){
    alert("Number is lower than the secret one");
    }else if(guess > number){
    alert("number is higher than the secret one");
    }else {
    alert("you guess it! It was " + number);
    guessed = true;
    console.log(guessed);
    }
}
