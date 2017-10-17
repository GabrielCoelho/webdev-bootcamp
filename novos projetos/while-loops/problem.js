//1st problem
console.log("Print all numbers between -10 and 19");
// for(var i = -10; i < 20; i++){
//     console.log(i);
// }
var i = -10;
while(i < 20){
    console.log(i);
    i++;
}

//2nd Problem
console.log("Print all even numbers between 10 and 40");
var j = 10;
while(j <= 40){
    if(j % 2 ==0){
        console.log(j);
    }
    j++;
}

//3rd problem
console.log("Print all odd numbers between 300 and 333");
var k = 300;
while(k <=333){
    if(k % 2 != 0){
        console.log(k);
    }
    k++;
}

//4th problem
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
var l = 5;
while(l <=50){
    if(l % 5 == 0 && l % 3 == 0){
        console.log(l);
    }
    l++;
}