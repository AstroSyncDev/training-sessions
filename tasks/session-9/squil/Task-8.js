const orders = [
    { customer: 'Alice', drink: 'Latte', size: 'medium', price: 4.5, extras: ['soy milk'], isPaid: true },
    { customer: 'Bob', drink: 'Espresso', size: 'small', price: 3, extras: [], isPaid: true },
    { customer: 'Charlie', drink: 'Cappuccino', size: 'large', price: 5.5, extras: ['extra shot'], isPaid: false },
    { customer: 'Dana', drink: 'Latte', size: 'medium', price: 4.5, extras: ['vanilla syrup'], isPaid: true },
    { customer: 'Eli', drink: 'Americano', size: 'large', price: 4.5, extras: [], isPaid: true },
    { customer: 'Fay', drink: 'Mocha', size: 'medium', price: 5, extras: ['whipped cream'], isPaid: false },
    { customer: 'Grace', drink: 'Flat White', size: 'small', price: 3.5, extras: ['almond milk'], isPaid: true },
];

// const NewOreders = orders.filter(order => order.drink === 'Latte',)
// console.log(NewOreders);



// const CustomerNames = orders.map((name) => name.customer);
// console.log(CustomerNames);


// const TotalPaid = orders
//     // .filter(o => o.isPaid)
//     .reduce((sum, orders) => orders.isPaid ? sum + orders.price : sum, 0)
// console.log(TotalPaid);


// console.log(
// orders.sort((a, b) => b.price - a.price)
// );

// const DiscountedOreders = orders.map(order => {
//     if (order.size = 'Large') {
//         return {
//             ...order,
//             price: order.price * 0.9
//         };
//     }
//     return order;
// })
// console.log(DiscountedOreders);

// const UnpaidOreders = orders.some(order => order.isPaid === true)
// console.log(UnpaidOreders);


// const LowOrder = orders.every(order => order.price > 2)
// console.log(LowOrder);

// const DrinkWithVanilla = orders.find(order => order.extras.some(extra => extra === 'vanilla syrup'))

// console.log(DrinkWithVanilla);


const DrinksSorted = orders.reduce((acc, order) => {
    const DrinkType = order.drink;
    if (!acc[DrinkType]) {
        acc[DrinkType] = [];
    }
    acc[DrinkType].push(order);
    return acc;
},
    {}
)

console.log(DrinksSorted);

