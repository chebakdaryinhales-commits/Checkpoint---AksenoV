

import genDiff from "./diffGenerator.js";


const obj1 = {
    one: 'АБОБА',
    two: 'Мтищи',
    three: 'Квадробер',
    four: 'Бебра'
};

const obj2 = {
    one: 'ЯСАВ',
    three: 'Квадробер',
    four: 'Бебра',
    eleven: 'Дикий огурец'
};

console.log(genDiff(obj1, obj2));