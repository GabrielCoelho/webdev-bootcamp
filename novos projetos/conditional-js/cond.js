var age = prompt("What is your age?");

if(age < 0){
    console.log("ERROR 1 - age cannot be negative");
    alert("Age cannot be negative");
} 
if(age == 21){
    alert("Happy 21st birthday");
    console.log("Feliz aniversário de 21");
} 
if(age % 2 != 0){
    alert("Your age is odd - ímpar!");
    console.log("Sua idade é impar");
} 
if(((age * age) / 4) % 2 == 0 || (age * age) % 8 == 1){
    alert("You age is a perfect square!");
    console.log("Sua idade é um quadrado perfeito!");
}
