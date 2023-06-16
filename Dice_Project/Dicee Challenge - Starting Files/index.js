var randomNumber1 = Math.floor(Math.random() * 6) + 1; //RandomNumber 1
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-to-dice6.png
var randomImageSource1 = "images/" + randomDiceImage; //images/dice1.png-to-images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll ("img")[1];

image2.setAttribute("src" , randomImageSource2)

if (randomNumber2 < randomNumber1) {
	document.getElementById("result").innerHTML = "Player1 Win"
} else if (randomNumber2 > randomNumber1) {
	document.getElementById("result").innerHTML = "Player2 Win"
} else {
	document.getElementById("result").innerHTML = "Draw"
}



