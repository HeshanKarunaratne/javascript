const numbers = [1, -4, 5, 2, 6, 3];
const items = numbers
    .filter(number => number >= 0)
    .map(n => ({ values: n }));
console.log(items);