// Exercise 1
var aboutMe = {
    firstName: "Olabode",
    lastName: "Adewumi",
    Occupation: "Software Developer"
    }

    // Exercise 2
    aboutMe.firstName //"Olabode"
    aboutMe.lastName //"Adewumi"
    aboutMe.Occupation //"Software Developer"
    aboutMe['firstName'] //"Olabode"
    aboutMe['lastName'] //"Adewumi"
    aboutMe["Occupation"] //"Software Developer"

    // Exercise 3
    aboutMe.hobby = 'coding' //"coding"

    delete aboutMe.Occupation // true

    // Exercise 5
var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}
console.log(namesAndHobbies.elie + " => " + "ellie")   //  JavaScript => ellie

   // Exercise 6
   namesAndHobbies.Olabode = "coding"

   // Exercise 7
   if ("Olabode" in namesAndHobbies){
    console.log("Olabode: " + namesAndHobbies.Olabode)
}                                                       // Olabode: coding
