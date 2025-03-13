function setup() {
	const canvas = createCanvas(500, 500);
	canvas.parent("sketch");

	background("lightgrey");

	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;



	fill("gray");
	noStroke();
	ellipse(x(0.5), y(0.5), s(0.4), s(0.4));
	//fill("gray");
	ellipse(x(0.5), y(1.05), s(0.6), s(0.6));
}