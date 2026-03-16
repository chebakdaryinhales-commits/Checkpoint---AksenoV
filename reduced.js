const numbs = [1, 6, 3, 7, 2, 9, 7, 11]
const sum = numbs.reduce((acc, curr) => acc + curr, 0)
//console.log(sum)

const numbs2 = [1, 5, 2, 6]
const mul = numbs2.reduce((acc, curr) => acc * curr, 1)
//console.log(mul)

const wordssss = ['фофОФООФоОфо', 'ЧУМА']
const allstr = wordssss.reduce((sum, wordssss) => sum + wordssss.length, 0)
//console.log(allstr)

const numbi = [1153, 144, 464, 231, 83, 242, 235, 765]
const maxi = numbi.reduce((max, curr) => (curr > max ? curr : max))
//console.log(maxi)

const stud = [
    {name: 'Олегсандр'},
    {name: 'Абрам Вольфрам'},
    {name: 'Хаги Ваги'}
]
const countStud = stud.reduce((acc) => acc + 1, 0)
console.log(countStud)