type A = {
	field: string,
};
type B = {
	field: string | number,
};

const a: A = { field: '123' };
const b: B = a;

b.field = 123;

// What will the console output? Where is the problem? How to avoid the problem?
console.log(a.field.length);
console.log(a.field.indexOf('2'));
