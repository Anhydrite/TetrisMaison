function setup() {
	createCanvas(canvasWidth, canvasHeigth)
	Cube = new bigCube(0, 0);
	slider = createSlider(0, 200, 1);
}

function draw() {
	background(0);
	for (let i = 0; i < slider.value(); i++) {
		compteur++;
		if (Cube.descente == 0) {
			fixedCube.push(Cube);
			console.log(fixedCube[0].cubes.length);
			Cube = new bigCube(0, 0);
			for (let cube of fixedCube) {
				if (cube.collisionEnd()) {
					slider = 0;
				}
			}
			Checkline();
		}
		if (compteur % 50 == 0) {
			Cube.descendre();
			Cube.collision();
		}

		for (let cube of fixedCube) {
			for (let cube2 of cube.cubes) {
				Cube.collisionObjet(cube2.x, cube2.y, cube2.x2, cube2.y2);
			}
		}
	}

	if (rightPressed) {
		Cube.moveDroite();
	}
	if (leftPressed) {
		Cube.moveGauche();
	}
	if (upPressed) {
		Cube.descendre();
		Cube.collision();
	}
	//DRAWING
	Cube.draw();
	for (let cube of fixedCube) {
		cube.draw();
	}
}
