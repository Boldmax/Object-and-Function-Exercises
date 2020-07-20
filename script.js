var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//  Num 1
programming.languages.push('Go'); //  ["JavaScript", "Python", "Ruby", "Go"],

 // Num 2
programming.difficulty = 7;    // difficulty: 7

// Num 3
delete programming.jokes;  // true

// Num 4
programming.isFun = true;

// Num 5
for ( var items in programming){
    console.log(programing.languages);     //   ["JavaScript", "Python", "Ruby", "Go"],
}

// Num 6
console.log(Object.keys(things));    
                                         

// Num 7
for ( var items in programming){          
    console.log(programing[items]);
}

