play();

function play() {
  var playButton = document.getElementById('playButton');
  var computerChoice = "";
  var userChoice = "";
  var score = "";

  playButton.addEventListener('click', function() {
    computerChoice = getGameChoice();
    userChoice = getGameChoice();
    score = compare(computerChoice, userChoice);

    document.getElementById('computerChoice').innerHTML = convertToWord(computerChoice);
    document.getElementById('userChoice').innerHTML = convertToWord(userChoice);
    document.getElementById('gameResult').innerHTML = score;
    });
}


// Part 2 - computer Random
main()

function main(){
  var button = document.getElementById('btn');
  var resetButton = document.getElementById('clearBtn');
  var userList = document.getElementById('userList');


  addEvents();

  function addEvents(){
  userList.addEventListener('change', function(){
    var options = this.getElementsByTagName("option");
    var optionHTML = options[this.selectedIndex].innerHTML;
    document.getElementById('userGame').innerHTML = optionHTML;
  });
  button.addEventListener('click', function(){
    var outcome = "";

    var userGame = getUserChoice();

    var computerGame = getGameChoice();

    outcome = compare(computerGame, userGame);

    document.getElementById('computerGame').innerHTML = convertToWord(computerGame);
    document.getElementById('outcomeText').innerHTML = outcome;
  });

  resetButton.addEventListener('click', function(){
    document.getElementById('computerGame').innerHTML = "";
    document.getElementById('outcomeText').innerHTML = "";
    document.getElementById('userGame').innerHTML = "";
    document.getElementById('default').selected = true;

    });
  }
}

// Global Functions
function getGameChoice() {
  var possibleChoices = [0, 1, 2];
  var randomItem = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
  return randomItem;
}

function getUserChoice() {
  var userList = document.getElementById('userList');
  var optionValue = userList.options[userList.selectedIndex].value;
  var userChoice = parseInt(optionValue);
  return userChoice;
}

function convertToWord(num){
  if(num === 0) {
    return "Rock";
  }
  else if(num === 1){
    return "Paper";
  }else {
    return "Scissors";
  }
}

//0 = rock ; 1 = paper; 2 = scissors
// a = computerGame ; b = userGame
function compare(a, b){
  var result = "";
  if(a === b) {
    result = "It's a tie! Try again!";
  }
  else if((a === 0 && b === 1) || (a === 1 && b === 2) || (a === 2 && b === 0)){
    result = "User Wins!";
  }else{
    result = "Computer Wins!";
  }
  return result;
}
