/*Here's how the app works:

There will be four crystals displayed as buttons on the page.

The player will be shown a random number at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from the beginning of the game.

The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

Option 1 Game design notes

The random number shown at the start of the game should be between 19 - 120.

Each crystal should have a random hidden value between 1 - 12.

____________-----------------------__________________---------------------
------------_______________________-----------------______________________
*/



//Select a random variable between 19-120 to show the user, set equal to "goal"
var goal = Math.floor(Math.random()*102 + 19);
//Select random value between  1-12 for each element
var fire = Math.floor(Math.random()*12 + 1);
var leaf = Math.floor(Math.random()*12 + 1);
var lightning = Math.floor(Math.random()*12 + 1);
var water = Math.floor(Math.random()*12 + 1);
// create an empty var "total scores"
var victories = 0;
var losses = 0;
var totalScore = 0;
//var currentScore;

//store value of each element

$("#btn1").attr("data-val", fire);
$("#btn2").attr("data-val", leaf);
$("#btn3").attr("data-val", lightning);
$("#btn4").attr("data-val", water);
var test = parseInt(fire)
//console.log(typeof(test))
console.log("fire= " + fire);
console.log("leaf= " + leaf);
console.log("lightning= " + lightning);
console.log("water= " + water);
console.log ("goal= " + goal);

//set the target goal based on the original random number between 19-120
$("#randomNumber").append(goal);


//on the click of a button put the value of the element and add it to the "total", keep doing it for every on click event

$("button").on("click", function(){
	var currentGuess = $(this).attr("data-val");
	var test = parseInt(currentGuess);
	
	totalScore += test;
	//console.log(totalScore);

	$("#totalScore").html(totalScore);

	if(totalScore>goal){
		//alert("You lost. Sad!");
		losses++;
		$("#losses").html("Loss Counter: " + losses);
		alert("You lost. Sad!");
		reset();

	//insert reset function here
	}
	else if(totalScore === goal){
		//alert("Congrats! you won.");
		victories++;
		$("#wins").html("Win Counter: " + victories);
		alert("Congrats! you won.")
		reset();
	//insert reset function here
	}

});

function reset(){
	goal = Math.floor(Math.random()*102 + 19);
	fire = Math.floor(Math.random()*12 + 1);
	leaf = Math.floor(Math.random()*12 + 1);
	lightning = Math.floor(Math.random()*12 + 1);
	water = Math.floor(Math.random()*12 + 1);
	totalScore = 0;
	$("#totalScore").html(totalScore);
	$("#randomNumber").html("Random Number to get: " + goal);
	test = parseInt(fire)
	console.log("fire= " + fire);
	console.log("leaf= " + leaf);
	console.log("lightning= " + lightning);
	console.log("water= " + water);
	console.log ("goal= " + goal);
	$("#btn1").attr("data-val", fire);
	$("#btn2").attr("data-val", leaf);
	$("#btn3").attr("data-val", lightning);
	$("#btn4").attr("data-val", water);
}
	



// have a div that is the counter that keeps track of wins and losses










