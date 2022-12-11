//output your name - ex1
//console.log("Sourav Nath")
//input user's name - ex2
/*

/**** Mark 1 *****/

var readLineSync = require('readline-sync')

var username = readLineSync.question("May I have your name please?")
var welcomeUser = "Welcome, " + username
console.log(welcomeUser)

var question1 = "What is my favourite food?"
var question2 = "What is my favourite color?"
var question3 = "When we will go to Goa?"
var question4 = "What do I do?"
var question5 = "Which is my favourite city in India?"
var question6 = "Am I a lazy fellow?"

var answer1 = "chicken"
var answer2 = "red"
var answer3 = "Never"
var answer4 = "Freelancing"
var answer5 = "Bengaluru"
var answer6 = "No"

var score = 0


function play(question, answer) {
  var userAnswer1 = readLineSync.question(question1)

  if (userAnswer1.toLowerCase() === answer1.toLowerCase()) {
    console.log("Great! You're right")
    score = score + 1
  }
  else {
    console.log("Oops!You're Wrong!")

  }
  var userAnswer2 = readLineSync.question(question2)
  if (userAnswer2.toLowerCase() === answer2.toLowerCase()) {
    console.log("Great! You're right")
    score = score + 1
  }
  else {
    console.log("Oops!You're Wrong!")

  }
  var userAnswer3 = readLineSync.question(question3)
  if (userAnswer3.toLowerCase() === answer3.toLowerCase()) {
    console.log("Great! You're right")
    score = score + 1
  }
  else {
    console.log("Oops!You're Wrong!")

  }
  var userAnswer4 = readLineSync.question(question4)
  if (userAnswer4.toLowerCase() == answer4.toLowerCase()) {
    console.log("Great! You're right")
    score = score + 1
  }
  else {
    console.log("Oops!You're Wrong!")

  }
  var userAnswer5 = readLineSync.question(question5)
  if (userAnswer5.toLowerCase() == answer5.toLowerCase()) {
    console.log("Great! You're right")
    score = score + 1
  }
  else {
    console.log("Oops!You're Wrong!")

  }
  var userAnswer6 = readLineSync.question(question6)
  if (userAnswer6.toLowerCase() == answer6.toLowerCase()) {
    console.log("Great! You're right")
    score = score + 1
  }
  else {
    console.log("Oops!You're Wrong!")

  }
  console.log(username + " Your Score is " + score)
}

play("Where do you work? ", "Dreaming")

