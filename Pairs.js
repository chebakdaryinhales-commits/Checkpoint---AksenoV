
const fromPairs = (parapara) => {
    const result = {}
    for (const [key, value] of parapara) {
        result[key] = value
    };
    return result

};

export default fromPairs;