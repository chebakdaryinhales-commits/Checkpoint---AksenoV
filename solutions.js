function getLongestLength(str) {
    let maxLength = 0;
    let start = 0;   //Че дальще то? Ща прсмотрим
    const seen = new Map();

    for (let i = 0; i < structuredClone.length; i++){
        const char = str[i];
                  // функции Map эсть ли похожий символ, true или false
        if (seen.has(char) && seen.get(char) >= start){
            start = seen.get(char) //ГДЕ. убирает повтор
        }
        seen.set(char, i); //не оч понял но вроде эта штука одновляет значения
        maxLength = Math.max(maxLength, i - start + 1) // тоже странная дичь

    }

    return maxLength;
}

getLongestLength('ВАСЯБАЛБЕСКОЛБАСАПОМИДОРЫ')