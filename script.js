    // Num 1
function myName(){
    var name = "Olabode Adewumi";
    console.log(name);
    }
    myName()   // Olabode Adewumi

    // Num 2
var favoriteFood = ["pazza", "ice cream"];
function randomFood(){
    var myFood = favoriteFoods[Math.floor(Math.random()*favoriteFoods.length)]
    console.log(myFood);
    }
    randomFood()  // pizza or ice cream

    // Num 3
    var numbers = [1,2,3,4,5,6,7,8,9,10];
    function displayOddNumbers(){
    for (var x = 0; x < numbers.length; x++){
    if ( x % 2 ===0){
    console.log(numbe[x])
    }
    }
    }
    displayOddNumbers() // 1,3,5,7,9

    // Num 4
    var numbers = [1,2,3,4,5,6,7,8,9,10];
function displayEvenNumbers(){
for (var x = 0; x < numbers.length; x++){
if ( x % 2 ===1){
console.log(numbers[x])
}
}
}
displayEvenNumbers() // ,2,4,6,8,10

//  Num 5
var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstOddNumbers(){
for (var x = 0; x < 2; x++){
if ( x % 2 ===1){
return numbers[x]
}
}
}
returnFirstOddNumbers()  // 1

// Num 6
var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstEvenNumbers(){
for (var x = 0; x < 2; x++){
if ( x % 2 ===0){
return numbers[x]
}
}
}
returnFirstEvenNumbers()  // 2

// Num 7
var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstHalf(){
var alpha = numbers.splice(0,5);
return alpha
}
returnFirstHalf()  // [1, 2, 3, 4, 5]

 // Num 8
 var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnSecondHalf(){
var alpha = numbers.splice(5,5);
return alpha
}
returnSecondHalf()   // [6, 7, 8, 9, 10]

