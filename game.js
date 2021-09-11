// Game variables
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const QUIT = "quit";
const PLAYER = "player";
const COMPUTER = "computer";
const TIE = "tie";
let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;

// Game functions

/**
 * Determines if given word is a legal input
 * @returns `true` if given word is valid, `false` otherwise
 */
function isLegalChoice(word) {
  const legalChoices = [ROCK, PAPER, SCISSORS, QUIT];
  return legalChoices.includes(word);
}

/**
 * Asks the player what their choice is.
 * @returns `string` constant of player's choice
 */
function getPlayerChoice() {
  let choice;
  while (true) {
    choice = prompt("Rock, Paper, or Scissors? (or quit to exit)", "")
      .toLowerCase()
      .trim();
    if (isLegalChoice(choice)) break;
    alert(
      `I don't know "${choice}"\nPlease enter: rock, paper, scissors, or quit.`
    );
  }
  switch (choice) {
    case ROCK:
      return ROCK;
    case PAPER:
      return PAPER;
    case SCISSORS:
      return SCISSORS;
    case QUIT:
      return QUIT;
    default:
      console.error("Unknown case");
      return QUIT;
  }
}

/**
 * Gets a random choice for the computer
 * @returns `string` constant of the computer's choice
 */
function getComputerChoice() {
  const choices = [ROCK, PAPER, SCISSORS];
  const randIdx = Math.round(Math.random() * (choices.length - 1));
  return choices[randIdx];
}

/**
 * Displays a message to user before returning false
 * @returns `false`
 */
function quitGame() {
  alert("Quiting game...");
  return false;
}

/**
 * Determines the result of the round.
 * @returns `string` constant of the winner
 */
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return TIE;
  if (playerChoice === ROCK) {
    if (computerChoice === SCISSORS) return PLAYER;
    if (computerChoice === PAPER) return COMPUTER;
  }
  if (playerChoice === PAPER) {
    if (computerChoice === SCISSORS) return COMPUTER;
    if (computerChoice === ROCK) return PLAYER;
  }
  if (playerChoice === SCISSORS) {
    if (computerChoice === ROCK) return COMPUTER;
    if (computerChoice === PAPER) return PLAYER;
  }
}

/**
 * Handles displaying message to the user and
 * incrementing the scores at the end of the round.
 */
function handleWinner(winner, playerChoice, computerChoice) {
  let msg = "";
  if (winner === PLAYER) {
    msg += "🎉 You won!";
    PLAYER_SCORE++;
  }
  if (winner === COMPUTER) {
    msg += "😢 You lost!";
    COMPUTER_SCORE++;
  }
  if (winner === TIE) msg += "😲 It's a tie!";
  msg += `\nYou chose ${playerChoice}, the computer chose ${computerChoice}.`;
  msg += `\n\nThe score is now:\nYou: ${PLAYER_SCORE} – Computer: ${COMPUTER_SCORE}`;
  alert(msg);
}

/**
 * Handles playing one round of Rock, Paper, Scissors.
 * @returns `true` if play should continue, `false` to quit the game.
 */
function playRound() {
  const playerChoice = getPlayerChoice();
  if (playerChoice === QUIT) return quitGame();
  const computerChoice = getComputerChoice();
  const winner = determineWinner(playerChoice, computerChoice);
  handleWinner(winner, playerChoice, computerChoice);
  return true;
}

// Call this to play game
function playRockPaperScissors() {
  while (playRound()) {}
}
