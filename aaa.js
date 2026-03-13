const merge = (...objects) => {
    const result = {};

    for (const obj of objects) {
    for (const [key, value] of Object.entries(obj)) {
        if (!Object.hasOwn(result, key)) {
        result[key] = [];
    }
    if (!result[key].includes(value)) {
        result[key].push(value);
    }
    }
    }

    return result;
};


export default merge;
