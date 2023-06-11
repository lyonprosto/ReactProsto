const f = async () => {
	console.log(0);

	setTimeout(() => console.log(1), 5);
	setTimeout(() => console.log(2), 0);

	const log3 = new Promise((resolve) => {
		console.log(3);
		setTimeout(() => console.log(4), 0);
		resolve();
	});

	log3.then(() => {
		console.log(5);
	});
	const log6 = new Promise((resolve) => resolve()).then(() => console.log(6))

	const log7 = async () => {
		console.log(7);
		await new Promise((resolve) => resolve()).then(() => console.log(8))
	}
	const log9 = () => console.log(9);

	log7();
	log9();
	await log6;
};
f();

// What is the order of the console logs?