function setup() {
	const canvas = createCanvas(500, 500);
	canvas.parent("sketch");
	background("coral");
	angleMode(DEGREES);

	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;

	fill("beige");

	ellipse(x(0.6), y(1), s(0.4), s(0.77));

	ellipse(x(0.47), y(0.69), s(0.2), s(0.2));
	ellipse(x(0.4), y(0.7), s(0.2), s(0.2));
	ellipse(x(0.26), y(0.68), s(0.27), s(0.22));
	//arm

	//Kopf
	fill("beige");
	//stroke("beige");
	ellipse(x(0.65), y(0.49), s(0.25), s(0.3));

	rotate((20 * 180) / 380);
	rect(x(0.09), y(0.35), s(0.34), s(0.35));
	//handfläche
	//stroke("beige");
	rect(x(0.1), y(0.15), s(0.049), s(0.22));
	rect(x(0.17), y(0.08), s(0.055), s(0.29));
	rect(x(0.25), y(0.07), s(0.06), s(0.3));
	rect(x(0.35), y(0.08), s(0.055), s(0.29));
	rotate((20 * 180) / 180);
	rect(x(0.56), y(0.2), s(0.08), s(0.3));
	//Finger von links
	rotate(0);
	line(x(0.3), y(0.4), s(0.5), s(0.32));
	line(x(0.4), y(0.5), s(0.5), s(0.36));
}