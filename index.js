var sound = new Audio("./sound/background.mp3");
function BackgroundMusicStart(){
	sound.play();
	sound.loop = true
	document.getElementById("Music_Start").style.display = "none";
	document.getElementById("Music_Stop").style.display = "block";
}
function BackgroundMusicStop(){
	sound.pause();
	sound.currentTime = 0;
	document.getElementById("Music_Start").style.display = "block";
	document.getElementById("Music_Stop").style.display = "none";
}

function diceroll(){
	var sound = new Audio("./sound/diceroll.mp3");
	sound.play();	
	var randomNumber1 =Math.floor(Math.random() * 6) + 1; //1-6

	var randomDiceImage = "dice" + randomNumber1 + ".png";

	var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

	var image1 = document.querySelectorAll("img")[0];

	image1.setAttribute("src", randomImageSource);

	var randomNumber2 =Math.floor(Math.random() * 6) + 1;

	var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

	document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if ((randomNumber1 == randomNumber2)&&(randomNumber1 == 6)){
  document.querySelector("h1").innerHTML = "WOW ... You are lucky !!!";
}
else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Even roll";
}
else {
  document.querySelector("h1").innerHTML = "Throw again!";
}
}