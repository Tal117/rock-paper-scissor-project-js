let wins = 0;
let losses = 0;
let draws = 0;

function userChoice(choice) {
    // Generate computer choice
    const computerChoice = getComputerChoice();
    // Determine outcome
    const outcome = determineOutcome(choice, computerChoice);
    // Update score and result display
    updateScore(outcome);
    displayResult(outcome, choice, computerChoice);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineOutcome(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function updateScore(outcome) {
    if (outcome === 'win') {
        wins++;
    } else if (outcome === 'lose') {
        losses++;
    } else if (outcome === 'draw') {
        draws++;
    }

    // Update the score display
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('draws').textContent = draws;
}

function displayResult(outcome, userChoice, computerChoice) {
    let resultMessage = '';
    if (outcome === 'win') {
        resultMessage = `You win! You chose ${userChoice}, and the computer chose ${computerChoice}.`;
    } else if (outcome === 'lose') {
        resultMessage = `You lose! You chose ${userChoice}, and the computer chose ${computerChoice}.`;
    } else {
        resultMessage = `It's a draw! Both chose ${userChoice}.`;
    }

    document.getElementById('result').textContent = resultMessage;
    document.getElementById('computer-choice').textContent = `Computer's choice: ${computerChoice}`;
}

function resetGame() {
    wins = 0;
    losses = 0;
    draws = 0;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('draws').textContent = draws;
    document.getElementById('result').textContent = '';
    document.getElementById('computer-choice').textContent = '';
}
