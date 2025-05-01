const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if( userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }else {
    console.log('error type again!');
  }
} 

//console.log(getUserChoice('rock'));


function getComputerChoice(){
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0 ){
    return 'rock';
  }else if( randomNumber === 1){
    return 'paper';
  }else{
    return 'scissors';
  }
}

//console.log(getComputerChoice());

function determineWinner(userChoice,computerChoice ){
  if(userChoice === computerChoice){
    return 'Game was a tie';
  }
  if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won';
    } else{
      return 'User won';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer won';
    }else{
      return 'User won';
    }
  }
  if (userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer won';
    }else {
      return 'user won';
    }
  }
}

function playGame(){
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

