const genDiff = (obj1, obj2) => {
    const keys = Object.keys({ ...obj1, ...obj2 });
    const result = keys.reduce((acc, key) => {
        if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
            acc[key] = 'deleted';
        }
        else if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
            acc[key] = 'added';
        } 
        else if (obj1[key] !== obj2[key]) {
            acc[key] = 'changed';
        } else {
            acc[key] = 'unchanged';
        }
        return acc;
    }, {});
    return result;
};

export default genDiff;