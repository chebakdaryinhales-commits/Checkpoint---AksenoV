const str = 'Кремация';
const n = 6;

const takeLast = (str, n) => {
    if (str.length < n || str === '') {
    return null;
    };
    const newobj = str.slice(-n).split('').reverse().join('');
    return newobj;
}

console.log(takeLast(str, n)) //результат -- яицаме :DDDD