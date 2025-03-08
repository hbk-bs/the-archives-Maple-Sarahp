function setup() {
	createCanvas(400, 400);
	background("darkslategray");

	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;

	fill("brown");
	stroke("black");
	ellipse(x(0.5), y(0.5), s(0.5), s(0.5));

	fill("coral");
	stroke("coral");
	ellipse(x(0.5), y(0.5), s(0.4), s(0.4));

	fill("maroon");
	stroke("maroon");
	ellipse(x(0.5), y(0.5), s(0.1), s(0.1));

	fill("darkseagreen");
	stroke("darkseagreen");
	rect(x(0), y(0), s(1), s(0.38));
	rect(x(0), y(0.6), s(1), s(0.4));

	fill("beige");
	noStroke();
	ellipse(x(0.48), y(0.5), s(0.01), s(0.033));
}