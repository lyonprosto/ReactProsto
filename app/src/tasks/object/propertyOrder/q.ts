const checkSecondPerfect = () => true;

let tabs = {
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
const isSecondPerfect = checkSecondPerfect();
tabs = {
	...restTabs,
	second: !isSecondPerfect ? second : {
		label: 'My Perfect Second Page',
		content: 123,
	},
};

const tabItems = Object.entries(tabs).map(([key, { label, content }]) => ({ key, label, content }));

// What is the order of the tabs? What is wrong with this approach? What are the alternatives?
console.log(tabItems);
