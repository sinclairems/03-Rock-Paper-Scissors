// I want to play Rock, Paper, Scissors against the computer

// Algorithm for RPS
// 1. Create 3 options: Rock, Paper, Scissors
        // vars [R, P, S]
// 2. Rock beats Scissors, Scissorts beats Paper, Paper beats Rock
        // if (R > S) {R wins} else if (S > P) {S wins} else if (P > R) {P wins}
// 3. User chooses one of the 3 options
        // user "does" something: prompt("Do you choose R, P, or S?")
// 4. Almost simultaneously, the computer chooses one of the 3 options randomly
        // computer "does" something: [Math.floor(Math.random() * vars.length)]
// 5. Refer back to the rules to determine who wins
        // if (userChoice > computerChoice) {user wins} else if (computerChoice > userChoice) {computer wins} else {tie}
// 6. Display the winner and the score for each player
        // alert("You chose " + userChoice + " and the computer chose " + computerChoice + ". " + winner + " wins!")
// 7. Ask the user if they want to play again 
        // confirm("Do you want to play again?" + " Yes or No")
// 8. If yes, repeat steps 3-7
        // if (playAgain === true) {repeat steps 3-7} else {end game}

// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors
var RPS = ["R", "P", "S"];
var userChoice = prompt("Do you choose R, P, or S?");

// As a user, I expect the computer to choose R, P, or S
var computerChoice = RPS[Math.floor(Math.random() * RPS.length)];

// As a user, I want the option to play again whether I win or lose
var playAgain = confirm("Do you want to play again?");

// As a user, I want to see my total wins, ties and losses after each round
var wins = 



