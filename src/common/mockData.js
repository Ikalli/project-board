const friends = [
	{ name: '쯔위', age: 15 },
	{ name: '수지', age: 20 },
	{ name: '아이유', age: 25 },
	{ name: '손나은', age: 30 }
];
const posts = [
	{ desc: "hello world!", likes: 0},
	{ desc: "I like redux", likes: 10},
	{ desc: "I want to be full-stack", likes: 20},
	{ desc: "wtf", likes: 30},
];

function makeDataGenerator(items) {
	let itemIndex = 0;
	return function getNextData() {
		const item = items[itemIndex % items.length];
		itemIndex += 1;
		return { ...item, id: itemIndex };
	};
}

export const getFriend = makeDataGenerator(friends);
export const getPost = makeDataGenerator(posts);
