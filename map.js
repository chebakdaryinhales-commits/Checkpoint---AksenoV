const numb = [1, 2, 3];
const double = numb.map(numb => numb * 2)
//console.log(double)


const words = ['абобаба', 'Кристиану Роналдууууу сиуууу']
const toUpperCaseWords = words.map(words => words.toUpperCase())
//console.log(toUpperCaseWords)

const words2 = ['Абракадабра', 'а', 'энгри']
const stringLengths = words2.map(words2 => words2.length)
//console.log(stringLengths)

const aaa11 = ['SUUUUUU', 'ИСПАНЦЫ']
const addExcl = aaa11.map(aaa11 => aaa11 + '!!!')
//console.log(addExcl)


const users = [
    {name: 'Олегсандр', age: 56},
    {name: 'Абрам Вольфрам', age: 27},
    {name: 'Хаги Ваги', age: 2}
]
const giveNames = users.map(users => users.name)
//console.log(giveNames)