//output your name - ex1
//console.log("Sourav Nath")
//input user's name - ex2
/*var readlineSync = require('readline-sync')
var username = readlineSync.question("May I have your name please!")
var welcomeMessage = "Welcome!" + username;
console.log(welcomeMessage)*/


/***** //function to add two numbers
  
function addTwoNumbers(number1, number2){
  var sum = number1+number2
  return sum
}

var result = addTwoNumbers(2,5)
console.log("Result Sum "+result)****/

/**** Mark 1 *****/

var readLineSync = require('readline-sync')

var question1 = "What is my favourite food?"
var question2 = "What is my favourite color?"
var question3 = "When we will go to Goa?"
var score = 0

function play(question, answer){
  var userAnswer1 = readLineSync.question(question1)

  if(userAnswer1 == "Chicken"){
    console.log("Great! You're right")
    score = score+1
  }
  else{
    console.log("Oops!You're Wrong!")
  
  }
var userAnswer2 = readLineSync.question(question2)
   if(userAnswer2 == "Red"){
    console.log("Great! You're right")
    score = score+1
  }
  else{
    console.log("Oops!You're Wrong!")
    
  }
  var userAnswer3 = readLineSync.question(question3)
   if(userAnswer3 == "Never"){
    console.log("Great! You're right")
    score = score+1
  }
  else{
    console.log("Oops!You're Wrong!")
   
  }
console.log("Your Score is "+score)
}

play("Where do you work? ","Google")

