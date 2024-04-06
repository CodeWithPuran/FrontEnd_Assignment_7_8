document.addEventListener("DOMContentLoaded", function() {
    let player1Score = 0;
    let player2Score = 0;
    const winningScore = 10; // Change this to your desired winning score

    // Function to update the dice images
    function updateDiceImages(dice1Value, dice2Value) {
        document.getElementById("dice1").src = "images/dice" + dice1Value + ".png";
        document.getElementById("dice2").src = "images/dice" + dice2Value + ".png";
    }

    // Function to roll the dice and update scores
    function rollDice() {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        updateDiceImages(dice1, dice2);

        let scoreDifference = Math.abs(dice1 - dice2);
        if (dice1 > dice2) {
            player1Score += scoreDifference;
        } else if (dice2 > dice1) {
            player2Score += scoreDifference;
        }

        document.getElementById("player1Score").innerText = "Player 1 - Score: " + player1Score;
        document.getElementById("player2Score").innerText = "Player 2 - Score: " + player2Score;

        if (player1Score >= winningScore) {
            document.getElementById("resultMessage").innerText = "Player 1 Wins!";
            showResultMessage();
            disableRollButton();
        } 
        
        if (player2Score >= winningScore) {
            document.getElementById("resultMessage").innerText = "Player 2 Wins!";
            showResultMessage();
            disableRollButton();
        } 
        if (player1Score == player2Score){
            document.getElementById("resultMessage").innerText = "It's a Tie! Play again";
            showResultMessage();
        }
    }

    // Function to show the result message
    function showResultMessage() {
        document.getElementById("resultMessage").style.display = "inline-block";
    }

    // Function to disable the roll button after a player wins
    function disableRollButton() {
        document.getElementById("rollButton").disabled = true;
    }

    // Event listener for the roll button
    document.getElementById("rollButton").addEventListener("click", rollDice);
});
