var buttons = document.querySelectorAll(".drum");

for(i = 0; i < buttons.length ; i++) {

	buttons[i].addEventListener("click", function () {
		
		var buttonInnerHTML = this.innerHTML;

		makeSound(buttonInnerHTML);

		buttonAnimation(buttonInnerHTML);
	});
}

document.addEventListener("keydown", function (event) {
	
	var keyboardKey = event.key;

	makeSound(keyboardKey);

	buttonAnimation(keyboardKey);
});


function makeSound(key) {

	switch (key) {
			case "a":
				var crash = new Audio("sounds/crash.mp3");
				crash.play();
			break;

			case "s":
				var kickBass = new Audio("sounds/kick-bass.mp3");
				kickBass.play();
			break;

			case "d":
				var snare = new Audio("sounds/snare.mp3");
				snare.play();
			break;

			case "f":
				var tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();
			break;

			case "g":
				var tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();
			break;

			case "h":
				var tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();
			break;

			case "j":
				var tom4 = new Audio("sounds/tom-4.mp3");
				tom4.play();
			break;

			default: console.log(key);
		}
}

function buttonAnimation (key) {

	var activeButton = document.querySelector("." + key);

	activeButton.classList.add("pressed");

	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100);
}