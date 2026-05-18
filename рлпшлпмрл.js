class Cart {
    constructor() {
        this.items = []; 
    }

    addItems(count, name, price) {
        const product = {
            name: name,
            price: price,
            count: count
        };
        this.items.push(product);
    }

    getCost() {
        let sum = 0;
        for (const product of this.items) {
            sum += product.price * product.count;
        }
        return sum;
    }

    getCount() {
        let totalCount = 0;
        for (const product of this.items) {
            totalCount += product.count;
        }
        return totalCount;
    }
}

const myCart = new Cart();

myCart.addItems(2, "Обрубки", 15000); 
myCart.addItems(1, "Чай Золотая чаша", 204630);  
myCart.addItems(1, "Кощко-жена", 20000);  
myCart.addItems(53, "Нервные клетки", 57570);  
myCart.addItems(1, "ВАСЯ", 505676345907360900);  



console.log("Всего товаров:", myCart.getCount()); 
console.log("Общая стоимость:", myCart.getCost()); 