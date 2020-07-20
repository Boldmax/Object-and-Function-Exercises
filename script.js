// Exercise 4 A
function digits(a,b){
    return a + b
    }
    add(5,7)  // 12

    function subtract(a,b){
        return a - b
        }
        subtract(10,7)  // 3

        function multiply(a,b){
            return a * b
            }
            multiply(2,6)  //  12

            function divide(a,b){
                return a / b
                }
                divide(12,6)  //  2

    // Exercise 4 B
    var write = prompt();
    var myName = "Olabode";
    var name = write.toString();
    function sayHello(){
    if (name === myName){
    console.log("Hello Boss")
    }
    else {
    console.log("Hello " + name)
    }
    }
    sayHello()

    // Exercise 4 C
var arr = ["a", "b", "c", "d", "e"];
var sum = 0;
function average(arr){
for(var i = 0; i < arr.length; i++){
sum +=arr[i];
var mean = sum/arr.length
}
return mean
}
average([5,5,5,5,4,4,4,4,4])  //  4.444444444444445

// Exercise 4 D
function createStudent(a,b){
    names = {
    firstName:a,
    lastName:b
    }
    console.log(names)
    }
    createStudent("Olabode","Olalekan") // firstName: "olabode" lastName: "olalekan"

    // Exercise 4 E
    var Angelina = createStudent("Angelina","Jolie");
    var James = createStudent("James","Bond");
    var Tom = createStudent("Tom","Cruise");
    var students = [Anjelina, James, Tom];

    // Exercise 4 F
var students = [James, Anjelina, Tom];
var Snames = prompt("")
function firstStudent(){
for (var x = 0; x < students.length; x++){
if (students[x] == Snames){
return true
}
else{return false}
}
}                                  // true or false

   // Exercise 4 G

   var acceptArray = ["a", "b", "c", "d", "e"];
function extractEveryThird(acceptArray){
for (var i = 0; i < acceptArray.length; i++){
if (acceptArray[i] === acceptArray[2]){
    return acceptArray.splice([2,1])
}
}
}
extractEveryThird([0,8,0,6,8,1,9,1])   //  0

 // Exercise 4 H
 var countNum = ["a", "b", "c", "d", "e"];
function countEvensandOdds(countNum){
var numCount = 0;
var numCount1 = 0;
for (var i = 0; i < countNum.length; i++){
if (countNum[i] % 2 === 1){
numCount+=1;
}
else if(countNum[i] % 2 === 0){
    numCount1 +=1;
}
}
return "OddCount: " + numCount
}