class cube {
	constructor(x, y, colora, colorb, colorc) {
		this.x = x;
		this.y = y;
		this.x2 = cubeTaille - 1;
		this.y2 = cubeTaille;
		this.color = [colora, colorb, colorc];
	}
	draw() {
		stroke(0);
		fill(this.color[0], this.color[1], this.color[2]);
		rect(this.x, this.y, this.x2 + 1, this.y2);
	}
	descendre() {
		this.y += cubeTaille;
	}
}
