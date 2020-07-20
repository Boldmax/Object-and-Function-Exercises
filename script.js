// exercise 7 a
function printDay(weekDay){
    if (weekDay === 0)
       return "Monday";
    if (weekDay === 1)
        return "Tuesday";
    if (weekDay === 0)
        return "Wednesday";
    if (weekDay === 0)
        return  "Thursday";
    if (weekDay === 0)
        return "Friday";
    if (weekDay === 0)
        return "Saturday";
    if (weekDay === 0)
        return "Sunday";
    }
    printDay(0)           // Monday

// exercise 7 b
var values = ["a", "b", "c", "d"];
var last = [];
function lastValue(values){
last = values.pop();
return last
}
lastValue([2,3,4,5,6])  // 6

// exercise 7 c
function numberCompare(a,b){
    if (a > b){
    console.log("First is greater")
    }
    else if(a < b){
    console.log("Second is greater")
    }
    else if(a === b){
    console.log("Numbers are equal")
    }
    else{
    console.log("Empty string")
    }
    }
    numberCompare(7,3)        // First is greater
    numberCompare(5,8)        // Second is greater
    numberCompare(8,8)        // Numbers are equal

    // exercise 7 d
        
function singleLetterCount(str, a){
    var str1 = "loop"
    str1 = str1.toUpperCase();
    countStr = 0;
    for (var i = 0; i < str.length; i++){
    if (str.charAt(i) === a){
    countStr +=1 ;
    }
    }
    return countStr
    }
    singleLetterCount("repeated", "e")   // 3

   // exercise 7 e
   function multipleLetterCount(str1){
    var obj = {};
    for (var i = 0; i < str1.length; i++){
    var count1 = str1.charAt(i);
    if (obj[count1]){
    obj[count1]++;
    }
    else{
    obj[count1] = 1;
    }
    }
    return obj;
    }
    multipleLetterCount("memorise")    // {m: 2, e: 2, o: 1, r: 1, i: 1, s: 1}

    // exercise 7 f
    var arr1 = ["a", "b", "c", "d", "e"];
function arrayManipulation(arr1,command,position,value){
var value;
var result = [] ;
if ((command === "add") && (position === "end")){
arr1.push(value);
result = arr1;
}
else if ((command === "remove") && (position === "end")){
arr1.pop(value);
result = arr1;
}
else if ((command === "add") && (position === "start")){
arr1.unshift(value);
result = arr1;
}
else if ((command === "remove") && (position === "start")){
arr1.shift(value);
result = arr1;
}
return result
}
arrayManipulation([2,3,4,5,6],"add","start",8)   // [8, 2, 3, 4, 5, 6]

// exercise 7 g
function palindrome(str) {
         xlow = str.toLowerCase();
         xsplit = xlow.split("");
         xrev = xsplit.reverse();
         xjoin = xrev.join("");
         allExprs = xjoin.replace(/[\W_]/gi, "");
         if(allExprs === str)
           {
             return true;
           }
         else
           {
             return false;
           }
           }