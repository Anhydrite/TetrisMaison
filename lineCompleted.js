// function Checkline() {
//   for (let i = 0; i <= canvasHeigth; i += cubeTaille) {
//     for (let j = 2; j <= canvasWidth; j += cubeTaille) {
//       let hit = 0;
//       stroke(255);
//       point(j, i);
//       for (let cube of fixedCube) {
//         for (let cube2 of cube.cubes) {
//           if (collideLineRect(j, i, canvasWidth, i, cube2.x, cube2.y, cube2.x2, cube2.y2)) {
//             hit++;
//           }
//         }
//         if (hit >= 32) {
//           for (let k = fixedCube.length - 1; k > 0; k--) {
//             for (let l = fixedCube[k].cubes.length - 1; l >= 0; l--) {
//               if (collideLineRect(j, i, canvasWidth, i, fixedCube[0].cubes[l].x, fixedCube[0].cubes[l].y, fixedCube[0].cubes[l].x2, fixedCube[0].cubes[l].y2)) {
//                 fixedCube[k].destroyCube(l);
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//
// }

function lineComplete() {
  for (let i = cubeTaille / 2; i <= canvasHeigth; i += cubeTaille) {
    stroke(255, 0, 0);
    line(0, i, canvasWidth, i);
    let hit = 0;
    for (let cube of fixedCube) {
      for (let cube2 of cube.cubes) {
        if (collideLineRect(0, i, canvasWidth, i, cube2.x, cube2.y, cube2.x2, cube2.y2))
          hit++;
      }
    }
    if (hit == 16) {
      hit = 0;
      console.log(hit + " coll");
      for (let cube of fixedCube) {
        for (let j = cube.cubes.length - 1; j >= 0; j--) {
          if (collideLineRect(0, i, canvasWidth, i, cube.cubes[j].x, cube.cubes[j].y, cube.cubes[j].x2, cube.cubes[j].y2)) {
            console.log("testa");
            cube.destroyCube(j);
          }
        }
      }

    }
  }
}