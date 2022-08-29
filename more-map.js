const numbers = [12, 56, 87, 44];
const hlaf = numbers.map( n => n/2);
const thirds = numbers.map(x => x/3);

// console.log(hlaf)
// console.log(thirds)

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM jolil'];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);
const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 45000},
    {id: 1, name: 'tob', price: 45000},
    {id: 1, name: 'watch', price: 45000}
]

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
console.log(prices)
console.log(items)