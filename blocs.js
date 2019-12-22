class Bloc {
	constructor(x, y) {
		this.cubes = [];
		this.x;
		this.y;
		this.descente = 1;
	}
	draw() {
		for (let cube of this.cubes) {
			cube.draw();
		}
	}
	descendre() {
		for (let cube of this.cubes) {
			if (this.descente)
				cube.descendre();
		}
	}
	destroyCube(index) {
		this.cubes.splice(index, 1);
	}
	collision() {
		if (this.descente == 1) {
			for (let cube of this.cubes) {
				let hit = collideLineRect(0, canvasHeigth, canvasWidth, canvasHeigth, cube.x, cube.y, cubeTaille, cubeTaille);
				if (hit) {
					this.descente = 0;
					return;
				}
			}
		}
	}
	collisionObjet(x, y, x2, y2) {
		for (let cube of this.cubes) {
			if (collideRectRect(x, y, x2, y2, cube.x, cube.y, cube.x2, cube.y2)) {
				this.descente = 0;
				return true;
			}
		}
	}
	collisionCote(x, y, x2, y2) {
		for (let cube of this.cubes) {
			if (collideRectRect(x, y, x2, y2, cube.x, cube.y, cube.x2, cube.y2)) {
				return true;
			}
		}
	}
	collisionEnd() {
		for (let cube of this.cubes) {
			if (collideLineRect(0, 0, canvasWidth, 0, cube.x, cube.y, cube.x2, cube.y2)) {
				return true;
			}
		}
	}
	moveDroite() {
		if (this.descente == 1) {

			for (let cube of this.cubes) {
				if (cube.x + cubeTaille * 2 > canvasWidth) {
					return;
				}
			}
			for (let cube of this.cubes) {
				cube.x += cubeTaille;
			}
			for (let cube of fixedCube) {
				for (let cube2 of cube.cubes) {
					if (Cube.collisionCote(cube2.x, cube2.y, cube2.x2, cube2.y2)) {
						for (let cube of this.cubes) {
							cube.x -= cubeTaille;
						}
					}
				}
			}
		}
	}
	moveGauche() {
		if (this.descente == 1) {
			for (let cube of this.cubes) {
				if (cube.x - cubeTaille < -1) {
					return;
				}
			}
			for (let cube of this.cubes) {
				cube.x -= cubeTaille;
			}
			for (let cube of fixedCube) {
				for (let cube2 of cube.cubes) {
					if (Cube.collisionCote(cube2.x, cube2.y, cube2.x2, cube2.y2)) {
						for (let cube of this.cubes) {
							cube.x += cubeTaille;
						}
					}
				}
			}

		}
	}
}

class bigLine extends Bloc {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
		this.colora = random(255);
		this.colorb = random(255);
		this.colorc = random(255);
		this.cubes.push(new cube(this.x, this.y, this.colora, this.colorb, this.colorc));
		this.cubes.push(new cube(this.x + cubeTaille, this.y, this.colora, this.colorb, this.colorc));
		this.cubes.push(new cube(this.x + cubeTaille * 2, this.y, this.colora, this.colorb, this.colorc));
		this.cubes.push(new cube(this.x + cubeTaille * 3, this.y, this.colora, this.colorb, this.colorc));
	}

}
class bigPointe extends Bloc {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
		this.colora = random(255);
		this.colorb = random(255);
		this.colorc = random(255);
		this.cubes.push(new cube(this.x, this.y, this.colora, this.colorb, this.colorc));
		this.cubes.push(new cube(this.x + cubeTaille, this.y, this.colora, this.colorb, this.colorc));
		this.cubes.push(new cube(this.x + cubeTaille * 2, this.y, this.colora, this.colorb, this.colorc));
		this.cubes.push(new cube(this.x + cubeTaille, this.y + cubeTaille, this.colora, this.colorb, this.colorc));
	}
}
class bigCube extends Bloc {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
		this.colora = random(255);
		this.colorb = random(255);
		this.colorc = random(255);
		this.cubes.push(new cube(this.x, this.y, this.colora, this.colorb, this.colorc));
		this.cubes.push(new cube(this.x + cubeTaille, this.y, this.colora, this.colorb, this.colorc));
		this.cubes.push(new cube(this.x + cubeTaille, this.y + cubeTaille, this.colora, this.colorb, this.colorc));
		this.cubes.push(new cube(this.x, this.y + cubeTaille, this.colora, this.colorb, this.colorc));

	}
}
class bigL extends Bloc {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
		this.colora = random(255);
		this.colorb = random(255);
		this.colorc = random(255);
		this.cubes.push(new cube(this.x, this.y, this.colora, this.colorb, this.colorc));
		this.cubes.push(new cube(this.x + cubeTaille, this.y, this.colora, this.colorb, this.colorc));
		this.cubes.push(new cube(this.x + cubeTaille * 2, this.y, this.colora, this.colorb, this.colorc));
		this.cubes.push(new cube(this.x + cubeTaille * 2, this.y + cubeTaille, this.colora, this.colorb, this.colorc));

	}
}
