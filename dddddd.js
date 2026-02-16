function flatten(array){
    let result = [];
    for (const item of array) {
        if (Array.isArray(item)) {   // Являетя ли массивом, элемент в массиве
            result = result.concat(flatten(item)) //Array типа как number - определяет тип объекта

        } else {
            result.push(item)
        }
    }

return result;
}


console.log(flatten([]))
console.log(flatten([1, [3, 2], 9]))
console.log(flatten([1, [[2], [3]], [9]]))
console.log(flatten([1, [[2], [3], [ 7, [34, [345, [66623]]]]], [9]]))