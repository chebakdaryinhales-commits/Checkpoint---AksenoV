const roman = (romaRoman) => {
    const map = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
    ];

    let result = '';
    let rumRum = romaRoman;
    for (const [value, symbol] of map) {
        while (rumRum >= value) {
            result += symbol; //+ символ
            rumRum -= value; //- значение
        }
    }
    return result 
};


export default roman;

const arab = (ararar) => {
    const map2 = [
    [I, 1],
    [V, 5],
    [X, 10],
    [L, 50],
    [C, 100],
    [D, 500],
    [M, 1000],
    ];

    const num = romanStr.split('').map(char => map[char]);
    if (num.inclufes(undefined)) return false;
    const result = num.reduce((acc, num, i) => {
        num < num[i + 1] ? acc - num : acc + num, 0;
    };
};