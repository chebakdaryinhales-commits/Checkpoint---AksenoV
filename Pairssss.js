import fromPairs from "./Pairs.js";

const chuvaki = [
    ['Aboba', 23],
    ['Obama', 67],
    ['Vasya', 5],
    ['Krosh', 354534]
];

console.log('Чуваки которых не было на острове:', fromPairs(chuvaki));