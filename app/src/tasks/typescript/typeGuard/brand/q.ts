{
	// Definitely not less than zero.
	type Radius = number;

	const logRadius = (radius: Radius) => {
		console.log(radius);
	};

	const someNumber = 123;

	// if (!checkRadius(someNumber)) {
	// 	throw new Error('Not a radius');
	// }

	// How make compile error? How to require a validation call?
	logRadius(someNumber);
}