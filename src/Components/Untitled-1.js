

const arr = [1, 2, 3, 4, 5];

const initialState = 15;

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const oneValur = arr.reduce(reducer, initialState);

console.log(oneValur); 