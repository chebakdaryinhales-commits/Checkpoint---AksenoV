const students = [
{ name: 'Tirion', class: 'B', mark: 3 },
{ name: 'Keit', class: 'A', mark: 3 },
{ name: 'Ramsey', class: 'A', mark: 4 },
];


const groupByMark = {}
for (const { name, mark } of students) {
    if (!Object.hasOwn(groupByMark, mark)) {
        groupByMark[mark] = []
    }
    groupByMark[mark].push(name)
}


console.table(groupByMark)

