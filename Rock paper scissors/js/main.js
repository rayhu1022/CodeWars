// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    let p1choice = p1.toLowerCase()
    let p2choice = p2.toLowerCase()
    if ((p1choice === 'rock' & p2choice === 'scissors') || (p1choice === 'paper' & p2choice === 'rock') || (p1choice === 'scissors' & p2choice === 'paper')) {
        return "Player 1 won!"
    } else if ((p1choice === 'rock' & p2choice === 'paper') || (p1choice === 'paper' & p2choice === 'scissors') || (p1choice === 'scissors' & p2choice === 'rock')) {
        return "Player 2 won!"
    }
    return "Draw!"
};