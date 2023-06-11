const sumInDepth = (array: any) => {
	if (array) return 1;
	return 0;
};

console.log(
	sumInDepth([1]), // 1
	sumInDepth([1, 4]), // 5
	sumInDepth([]), // Error
	sumInDepth([1, [], 2]), // 3
	sumInDepth([1, [2, [3]], 4]), // 10
	sumInDepth([1, [2], [3, 4]]), // 10
	sumInDepth([1, 2, 'qwe']), // Error
)
