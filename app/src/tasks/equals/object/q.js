const tabs = {
	first: {
		label: 'My First Page',
		content: 123,
	},
	second: {
		label: 'My Second Page',
		content: 123,
	},
	third: {
		label: 'My third page',
		content: 123,
	},
};

const { second, ...restTabs } = tabs;

const tabs1 = {
	...restTabs,
	second: {
		label: 'My Second Page',
		content: 123,
	},
};

const tabs2 = {
	...restTabs,
	second,
};

const result = {
	originAnd1: JSON.stringify(tabs) === JSON.stringify(tabs1),
	originAnd2: JSON.stringify(tabs) === JSON.stringify(tabs2),
	['1And2']: JSON.stringify(tabs1) === JSON.stringify(tabs2),
};

// What will the console output? Why? Are there other approaches?
console.log(result);
