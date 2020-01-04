function setup() {
  createCanvas(canvasWidth, canvasHeigth);
  Cube = new bigCube(0, 0);
  slider = createSlider(0, 200, 1);
}

function draw() {
  <
  background(0);
  for (let i = 0; i < slider.value(); i++) {
    compteur++;
    if (Cube.descente == 0) {
      fixedCube.push(Cube);
      let rand = random(0, 4);
      if (rand < 1) {
        Cube = new bigCube(0, 0);
      } else if (rand < 2) {
        Cube = new bigLine(0, 0);
      } else if (rand < 3) {
        Cube = new bigPointe(0, 0);
      } else if (rand < 4) {
        Cube = new bigL(0, 0);
      }
      for (let cube of fixedCube) {
        if (cube.collisionEnd()) {
          slider = 0;
        }
      }
      lineComplete();
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