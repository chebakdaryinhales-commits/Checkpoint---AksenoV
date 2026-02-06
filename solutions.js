export default function getLongestLength(str) {
    let maxLength = 0;
    let start = 0;   //Че дальще то? Ща прсмотрим
    const seen = new Map();



    for (let i = 0; i < str.length; i++){
        const char = str[i];


        if (seen.has(char) && seen.get(char) >= start){
            start = seen.get(char) + 1; //ГДЕ. убирает повтор
        }



        seen.set(char, i); //не оч понял но вроде эта штука одновляет значения
        maxLength = Math.max(maxLength, i - start + 1) // тоже странная дичь

    }

    return maxLength;
}

getLongestLength(`fweitokkam`)