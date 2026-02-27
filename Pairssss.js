/*const chuvaki = [
    ['Aboba', 23],
    ['Obama', 67],
    ['Vasya', 5],
    ['Krosh', 354534]
];

console.log('Чуваки которых не было на острове:', fromPairs(chuvaki)); */

import findWhere from './Pairs.js';

const books = [
    { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
    { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
    { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
];

const result = findWhere(books, { author: 'Shakespeare', year: 1611 });
console.log(result)