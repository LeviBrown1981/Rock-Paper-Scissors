var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var userChoice;
var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
  } else {
        computerChoice = "scissors";
  }
var compare = function(choice1,choice2) {
  if (choice1 === choice2) {
    return "It's a tie!";
}
if (choice1 === "rock") {
    if (choice2 === "scissors") {
        // rock wins
        return "You win!";
    } else {
        // paper wins
        return "You lose! Try again.";
    }
}
if (choice1 === "paper") {
    if (choice2 === "rock") {
        // paper wins
        return "You win!";
    } else {
        // scissors wins
        return "You lose! Try again.";
    }
}
if (choice1 === "scissors") {
    if (choice2 === "rock") {
        // rock wins
        return "You lose! Try again.";
    } else {
        // scissors wins
        return "You win!";
    }
}
};

rock.addEventListener( "click", function() {
  userChoice = this.id;
  function random_compChoice(compChoice) {
    return compChoice[Math.floor(Math.random()*compChoice.length)];
  }
  //display those choices to the browser
  //decide who wins 
});

var results = compare(userChoice,computerChoice);

paper.addEventListener( "click", function() {
  userChoice = this.id;
  function random_compChoice(compChoice) {
    return compChoice[Math.floor(Math.random()*compChoice.length)];
  }
})

scissor.addEventListener( "click", function() {
  userChoice = this.id;
  function random_compChoice(compChoice) {
    return compChoice[Math.floor(Math.random()*compChoice.length)];
  }
})