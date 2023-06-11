
const result = {
	[`1 == '1'`]: {
		['==']: 1 == '1',
		['===']: 1 === '1',
	},
	[`false == 'false'`]: {
		['==']: false == 'false',
		['===']: false === 'false',
	},
	[`false == 0`]: {
		['==']: false == 0,
		['===']: false === 0,
	},
	[`{} == {}`]: {
		['==']: {} == {},
		['===']: {} === {},
	},
};

// What will the console output? Why? What is the best operator to use?
console.log(result);