

/*const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];


/*const takeOldest = (users, count = 1) => {
    return [... users]
        .sort((a, b) => Date.parse(a.birthday) - Date.parse(b.birthday))
        .slice(0, count);

}

console.log('Один самый старший:');
console.table(takeOldest(users)); */

/*const result = []
for (const user of users) {
    result.push(user.name)

}

console.table(result)*/


/*const namesq = users.map(user => user.name)

console.log(namesq)*/

/*const numb = [3, 5, 6, 7]

const opp = numb.map(numb => numb ** 2)

console.log(opp)*/

const users = [
{
name: 'Tirion',
friends: [
{ name: 'Mira', gender: 'female' },
{ name: 'Ramsey', gender: 'male' },
],
},
{ name: 'Bronn', friends: [] },
{
name: 'Sam',
friends: [
{ name: 'Aria', gender: 'female' },
{ name: 'Keit', gender: 'female' },
],
},
{
name: 'Rob',
friends: [
{ name: 'Taywin', gender: 'male' },
],
},
];

const getGirlFriends = users
                        .flatMap(user => user.friends)
                        .filter(friend => friend.gender === 'female')
console.table(getGirlFriends);


