let a = 0;

{
	let a = 1;
}

{
	a = 2;
}

const f = () => {
	let a = 3;
}
f();

// What will the console log display?
console.log(a);
