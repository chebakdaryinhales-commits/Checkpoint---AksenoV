export default function chunk(arr, size) {
    const obama = [];

    for (let i = 0; i < arr.length; i += size){
        obama.push(arr.slice(i, i + size)) //по идее как сказала та фигня, эта фигня даек кусон длины

    }
    return obama;
}

chunk(['a', 'ыыы', 'e', 'уэ', 'маслина'], 3)