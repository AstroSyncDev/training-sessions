const orders = [
    { customer: 'Alice', drink: 'Latte', size: 'medium', price: 4.5, extras: ['soy milk'], isPaid: true },
    { customer: 'Bob', drink: 'Espresso', size: 'small', price: 3, extras: [], isPaid: true },
    { customer: 'Charlie', drink: 'Cappuccino', size: 'large', price: 5.5, extras: ['extra shot'], isPaid: false },
    { customer: 'Dana', drink: 'Latte', size: 'medium', price: 4.5, extras: ['vanilla syrup'], isPaid: true },
    { customer: 'Eli', drink: 'Americano', size: 'large', price: 4.5, extras: [], isPaid: true },
    { customer: 'Fay', drink: 'Mocha', size: 'medium', price: 5, extras: ['whipped cream'], isPaid: false },
    { customer: 'Grace', drink: 'Flat White', size: 'small', price: 3.5, extras: ['almond milk'], isPaid: true },
];
var group;
const Sortbydrinks = orders.reduce(
    (group, order) => {
        const { drink } = order;
        if (!group[drink]) {
            group[drink] = [];
        }
        group[drink].push(order)
        return group;
    }, {})

console.log(Sortbydrinks)



