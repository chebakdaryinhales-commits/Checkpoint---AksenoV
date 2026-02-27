
/*const fromPairs = (parapara) => {
    const result = {}
    for (const [key, value] of parapara) {
        result[key] = value
    };
    return result

};*/

const findWhere = (collection, where) => {
    const serachEnt = Object.entries(where);
    const result1 = collection.find((item) => {
        return serachEnt.every(([key, value]) => {
            return Object.hasOwn(item, key) && item[key] === value;
        });
    });
    return result1 ?? null;
}

export default findWhere;
