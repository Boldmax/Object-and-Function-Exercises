   // Exercise 5(1)
   var name = function (a,b){
    return a + " " + b
    };
     var displayFullName = name("Ella","Mark");  //"Ella Mark"

  
     // Exercise 5(2)
   // This is the main part of the function
   var createCalculator =function(a,b,c) {
    if (b === "+"){
    result = a + c
    }
    else if(b === "-"){
    result = a - c
    }
    else if(b === "*"){
    result = a * c
    }
    else if(b === "/"){
    result = a/c
    }
    else{
    result = console.log("No Operator Entered")
    }
    return result
    };
  // This will add the number input
    var add = function(a,b){
        return createCalculator(a,"+",b)
        }
        add(20,20);                   // 40

    // This will subtract the number input
    var subtract = function(a,b){
        return createCalculator(a,"-",b)
        }
        subtract(20,20);                    // 0

// This will multiply the number input
var multiply = function(a,b){
    return createCalculator(a,"*",b)
    }
    multiply(20,20);                    // 400

    // This will divide the number input
 var divide = function(a,b){
    return createCalculator(a,"/",b)
    }
    divide(20,20);                     // 1
