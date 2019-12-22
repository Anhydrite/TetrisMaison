document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
	if (e.key == "Right" || e.key == "ArrowRight") {
		rightPressed = true;
	}
	if (e.key == "Left" || e.key == "ArrowLeft") {
		leftPressed = true;
	}
	if (e.key == "Up" || e.key == "ArrowUp") {
		upPressed = true;
	}


}

function keyUpHandler(e) {
	if (e.key == "Right" || e.key == "ArrowRight") {
		rightPressed = false;
	}
	if (e.key == "Left" || e.key == "ArrowLeft") {
		leftPressed = false;
	}
	if (e.key == "Up" || e.key == "ArrowUp") {
		upPressed = false;
	}

}
