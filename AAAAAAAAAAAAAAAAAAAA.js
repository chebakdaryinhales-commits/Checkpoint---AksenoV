function getIntersection (arral1, arral2){
    const resus = [];
    let i1 = 0;
    let i2 = 0;
    while (i1 < arral1.length && i2 < arral2.length){
        const lastCommon = resus.at(-1);
        const item1 = arral1[i1];
        const item2 = arral2[i2];
        if (item1 === item2 && item1 !== lastCommon){
            resus.push(item1);
            i1 += 1;
            i2 += 1;
        }

        else if (item1 > item2) {
            i2 += 1;
        } 
        else {
            i1 += 1;
        }
    }
    return resus;
}

console.log(getIntersection([12, 13, 465, 213, 11, 554, 23, 54,], [12, 465, 11, 554, 23]))