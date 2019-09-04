var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var userChoice;
var compChoice = Math.random();
    if (compChoice < 0.34) {
        compChoice = "rock";
  } else if(compChoice <= 0.67) {
        compChoice = "paper";
  } else {
        compChoice = "scissors";
  }
var compare = function(userChoice,compChoice) {
  if (userChoice === compChoice) {
    return "It's a tie!";
}
if (userChoice === "rock") {
    if (compChoice === "scissors") {
        // rock wins
        return "You win!";
    } else {
        // paper wins
        return "You lose! Try again.";
    }
}
if (userChoice === "paper") {
    if (compChoice === "rock") {
        // paper wins
        return "You win!";
    } else {
        // scissors wins
        return "You lose! Try again.";
    }
}
if (userChoice === "scissors") {
    if (compChoice === "rock") {
        // rock wins
        return "You lose! Try again.";
    } else {
        // scissors wins
        return "You win!";
    }
}
};

rock.addEventListener( "click", function() {
  userChoice = this.id
  
  function random_compChoice(compChoice) {
    return compChoice[Math.floor(Math.random()*compChoice.length)];
  }
});

var results = compare(userChoice,compChoice);

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