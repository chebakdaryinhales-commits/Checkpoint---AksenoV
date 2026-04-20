
const makeDecartPoint = (x, y) => ({ x, y });
const getX = (point) => point.x;
const getY = (point) => point.y;

const makeRectangle = (point, width, height) => ({ point, width, height });
const getStartPoint = (rectangle) => rectangle.point;
const getWidth = (rectangle) => rectangle.width;
const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
    const p = getStartPoint(rectangle);
    const x1 = getX(p);
    const y1 = getY(p);
    const x2 = x1 + getWidth(rectangle);
    const y2 = y1 - getHeight(rectangle);
    return (x1 < 0 && x2 > 0) && (y1 > 0 && y2 < 0);
};

const render = (rectangle) => {
    const w = getWidth(rectangle);
    const h = getHeight(rectangle);
    
    const line = '* '.repeat(w);
    const body = ('*' + '  '.repeat(w - 2) + ' *\n').repeat(h - 2);
    
    console.log(`Rectangle ${w}x${h}:`);
    if (h > 1) {
    console.log(line + '\n' + (w > 1 ? body + line : ''));
    } else {
    console.log(line);
    }
};

const rect = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
render(rect);
console.log('Contains origin:', containsOrigin(rect));
