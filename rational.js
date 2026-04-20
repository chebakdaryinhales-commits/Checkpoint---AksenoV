const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);

    while (a !== b) {
        if (a > b) {
        a = a - b;
    } else {
        b = b - a;
    } 
}

    return a;
};

const makeRat = (numer, denom) => {
    const d = gcd(numer, denom);

    numer = numer / d;
    denom = denom / d;

    if (denom < 0) {
    numer = -numer;
    denom = -denom;
    }

    return {
        numer: numer,
        denom: denom,
    };
};

const getNumer = (r) => r.numer;
const getDenom = (r) => r.denom;

// Сложение
const add = (r1, r2) => {
    const n =
    r1.numer * r2.denom +
    r2.numer * r1.denom;

    const d =
    r1.denom * r2.denom;

    return makeRat(n, d);
};

// Вычитание
const sub = (r1, r2) => {
    const n =
    r1.numer * r2.denom -
    r2.numer * r1.denom;

    const d =
    r1.denom * r2.denom;

    return makeRat(n, d);
};

const ratToString = (r) => r.numer + '/' + r.denom;

const rat1 = makeRat(6, 9);
console.log(getNumer(rat1));
console.log(getDenom(rat1)); 

const rat2 = makeRat(1, 21);

const rat3 = add(rat1, rat2);
console.log(ratToString(rat3));

const rat4 = sub(rat1, rat2);
console.log(ratToString(rat4)); 