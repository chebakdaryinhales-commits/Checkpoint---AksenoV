function flatten(array){
    let result = [];
    for (const item of array) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item))

        } else {
            result.push(item)
        }
    }

return result;
}


console.log(flatten([]))
console.log(flatten([1, [3, 2], 9]))
console.log(flatten([1, [[2], [3]], [9]]))