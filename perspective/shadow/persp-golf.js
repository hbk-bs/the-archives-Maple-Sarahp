function setup() {
	const canvas = createCanvas(500, 500);
	canvas.parent("sketch");
	background("forestgreen");
	//himmel

	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;

	stroke("darkslategrey");
	strokeWeight(17);
	line(x(2.9), y(1), s(0.2), s(0.7));
	//schatten von Fahne

	fill("darkslategrey");
	stroke("darkslategrey");
	ellipse(0, 350, 500, 150);
	//loch

	fill("black");
	stroke("black");
	ellipse(0, 374, 430, 100);
	//schatten Loch

	//fill("brown");
	//ellipse(200, 50, 160, 160);
	//schlaeger teil1

	stroke("darkslategray");
	fill("darkslategray");
	ellipse(x(0.6), y(0.29), s(0.5), s(0.11));
	//schatten von ball
	fill("orange");
	stroke("orange");
	ellipse(x(0.38), y(0.2), s(0.2), s(0.2));
	//golfball

	stroke("grey");
	fill("grey");
	rect(x(0.05), y(0), s(0.02), s(0.66));
	//fahne
	fill("dimgray");
	stroke("dimgray");
	rect(x(0.068), y(0), s(0.002), s(0.66));
	//schatten AN der fahne
}