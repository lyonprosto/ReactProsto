{
	const a = 1;
	let b = 1;
	var c = 1;
}

// What will the console log display?
console.log({ a, b, c })

const log = () => console.log({ a, b, c });

{
	const a = 2;
	let b = 2;
	var c = 2;
}

// What will the console log display?
log();
console.log({ a, b, c });