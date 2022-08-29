const numbers = [12, 5, 34, 56, 75, 45, 1, 345, 78];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(num => num % 2 === 0);
console.log(even)

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'tob', price: 25000},
    {id: 1, name: 'watch', price: 35000}
]

const expensive1 = products.filter(product => product.price > 100000);
const expensive2 = products.filter(product => product.price > 1000);
const expensive3 = products.filter(product => product.price < 1000);
console.log(expensive3)