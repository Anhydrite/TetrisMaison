function Checkline() {
	for (let i = 0; i <= canvasHeigth; i += cubeTaille) {
		for (let j = 2; j <= canvasWidth; j += cubeTaille) {
			let hit = 0;
			stroke(255);
			point(j, i);
			for (let cube of fixedCube) {
				for (let cube2 of cube.cubes) {
					if (collideLineRect(j, i, canvasWidth, i, cube2.x, cube2.y, cube2.x2, cube2.y2)) {
						hit++;
					}
				}
				if (hit >= 32) {
					for (let k = fixedCube.length - 1; k > 0; k--) {
						for (let l = fixedCube[k].cubes.length - 1; l > 0; l--) {
							if (collideLineRect(j, i, canvasWidth, i, fixedCube[0].cubes[l].x, fixedCube[0].cubes[l].y, fixedCube[0].cubes[l].x2, fixedCube[0].cubes[l].y2)) {
								fixedCube[k].destroyCube(l);
							}
						}
					}
				}
			}
		}
	}
}
