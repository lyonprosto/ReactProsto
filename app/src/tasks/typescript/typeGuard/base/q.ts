try {
	throw new Error('My bad((');
} catch (error: unknown) {
	if (error /** How type check is WithProp??? */) {
		const typedError: any = error;
		console.error(typedError.message);
	}
}

const someObj: unknown = { prop: 123 };
if (someObj /** How type check is WithProp??? */) {
	const typedObj: any = someObj;
	console.log(typedObj.prop);
}

