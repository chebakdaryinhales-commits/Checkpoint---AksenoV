const numb = [-23, 324, 420, -1, -1024, 233, 752]
const posNumb = numb.filter(numb => numb > 0)
//console.log(posNumb) 

const numb2 = [1, 2, 3, 4, 5, 66, 13, 64, 88, 96, 73, 3255, 111, 2] 
const even = numb2.filter(numb => numb % 2 === 0)
//console.log(even)

const wordi = ['ПерриУтканос', 'Арбуз', 'Панама', 'И', 'Кошка', 'Огород']
const long = wordi.filter(wordi => wordi.length > 5)
//console.log(long)

const users = [
    {name:"Obamid", age:17},
    {name:"Vasya", age:21},
    {name:"Okupant", age:19},
    {name:"Grigoriy", age:5}
]
const adults = users.filter(users => users.age >= 18).map(user => user.name)
//console.log(adults)

const users2 = ['ПерриУтканос', 'Арбуз', 'Бензин', 'ААААААААА', 'Кошка', 'Агарар']
const startsWithA = users2.filter(users2 => users2.startsWith('А'))
console.log(startsWithA)
