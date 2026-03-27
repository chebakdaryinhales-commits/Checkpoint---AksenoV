/*const numbs = [2, 7, 11, 15]
const target = 9


const foundTarget = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return  [i, j], [arr[i], arr[j]]
            }
        }
    }
    return null;
}

const found = foundTarget(numbs, target)
console.table(found)*/

/*const x = 121

const palindrome = (num) => {
    const str = String(num)
    const len = str.length
    
    for(let i = 0; i < len / 2; i++){
        
        if(str[i] !== str[len - 1 - i]){
            return false;
        }
        
    }
    return true
}

console.log(palindrome(x))*/

/*const s = 'III';

const romanToInt = (s) => {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = map[s[i]];
        const next = map[s[i + 1]];
        if (cur < next) {
            result -= cur;
        } else {
            result += cur;
        }
    }

    return result;
};

console.log(romanToInt(s));*/

/*const nums = [1, 1, 2];
const k = [];
const dup = [];

const removeDuplicates = (nums, k, dup) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            dup.push(nums[i]);
        } else {
            k.push(nums[i]);
        }
    }
    return { k, dup };
}
const result = removeDuplicates(nums, k, dup);

console.log("Уникальные (k):", result.k);
console.log("Дубликаты (dup):", result.dup);*/






//const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


/*const sequenceSum = (n, begin, end) => {
    function factorial(end){
        if (end === 0) {
            return 1
        }
        return end + factorial(end - 1)
    } while (factorial(n-1) === begin) {
        return sum;
    }
}
console.log(sequenceSum(sum))*/

/*const suma = (begi, conez) => {
    if (begi > conez) {
        return 0;
    }
    return begi + suma(begi + 1, conez);
};

console.log(suma(11, 14))
console.log(suma(1, 3))
console.log(suma(-5, 6))
console.log(suma(9, 11))*/


/*var filter = function(arr, fn) {
    const filteredArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
};

const arr = [5, 4, 1, 2, 3]

const sortedArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};*/


var sortBy = function(arr, fn) {
    const sortedArr = [...arr];
    
    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = 0; j < sortedArr.length - 1 - i; j++) {
            if (fn(sortedArr[j]) > fn(sortedArr[j + 1])) {
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
            }
        }
    }
    
    return sortedArr;
};

