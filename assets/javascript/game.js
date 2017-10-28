// GLOBAL VARIABLES
// ============================================================================

// Crystal Variables
var crystal = {
	blue:
	{
		name: "Blue",
		value: 0
	},
	green:
	{
		name: "Green",
		value: 0
	},
	purple:
	{
		name: "Purple",
		value: 0
	},
	red:
	{
		name: "red",
		value: 0
	},
}

// Scores (Current and Target)
var currentScore 		= 0;
var targetScore 		= 0;

// Wins and Losses
var winCount 			= 0;
var lossCount 			= 0;

// FUNCTIONS
// ============================================================================

// function to get random numbers
var getRandom = function(min,max) {
	return Math.floor(Math.random() * (max - min + 1 )) + min;
}

var startGame = function(){

	// Reset the current Score
	currentScore = 0;

	// Set a new Target Score (Between 19 and 120)
	targetScore = getRandom(19,120);

	// Set values for each crystal (between 1 & 12)
	crystal.blue.value 			= getRandom(1, 12);
	crystal.green.value 		= getRandom(1, 12);
	crystal.purple.value 		= getRandom(1, 12);
	crystal.red.value 			= getRandom(1, 12);

	// Change the HTML to reflect all changes
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

	// Testing Console
	console.log("--------------------------------------")
	console.log("Target Score" + targetScore);
	console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Purple: " + crystal.purple.value + " | Red: " + crystal.red.value);
	console.log("--------------------------------------")
}

// Respond to click on crystals

	var addValues =function(crystal) {

	// Change currentScore
	currentScore = currentScore + crystal.value;

	// Change the HTML to reflect changes in current Score
	$("#yourScore").html(currentScore);

	// Call the checkWin Function
	checkWin();


	// Testing Console
	console.log("your Score:" + currentScore);
}


// Check if user win or lost the game . Reset afterwards
var checkWin = function(){

	// Check if currentScore is larger than targetScore
	if(currentScore > targetScore) {
		alert("Sorry, You Lost!");
		console.log("You Lost");

		// Add to Lost Counter
		lossCount++;

		// Change Loss Count HTML
		$("#lossCount").html(lossCount);

		// Restart the Game
		startGame();
	}


	else if (currentScore == targetScore) {
		alert("Congratulations! You Won!");
		console.log("You Won!");

		// Ass to the Win counter
		winCount++;

		// Change Win Count HTML
		$("#winCount").html(winCount);

		// Restart the Game
		startGame();
	}
}

// MAIN PROCESS
// ============================================================================
$("#blue").click(function(){
	addValues(crystal.blue);
});

$("#green").click(function(){
	addValues(crystal.green);
});

$("#purple").click(function(){
	addValues(crystal.purple);
});

$("#red").click(function(){
	addValues(crystal.red);
});

// Starts the game
startGame()