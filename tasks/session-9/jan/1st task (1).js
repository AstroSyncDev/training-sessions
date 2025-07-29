const orders = [
    { customer: 'Alice', drink: 'Latte', size: 'medium', price: 4.5, extras: ['soy milk'], isPaid: true },
    { customer: 'Bob', drink: 'Espresso', size: 'small', price: 3, extras: [], isPaid: true },
    { customer: 'Charlie', drink: 'Cappuccino', size: 'large', price: 5.5, extras: ['extra shot'], isPaid: false },
    { customer: 'Dana', drink: 'Latte', size: 'medium', price: 4.5, extras: ['vanilla syrup'], isPaid: true },
    { customer: 'Eli', drink: 'Americano', size: 'large', price: 4.5, extras: [], isPaid: true },
    { customer: 'Fay', drink: 'Mocha', size: 'medium', price: 5, extras: ['whipped cream'], isPaid: false },
    { customer: 'Grace', drink: 'Flat White', size: 'small', price: 3.5, extras: ['almond milk'], isPaid: true },
];

const latteOrders = orders.filter(order => order.drink === 'Latte')
console.log('Use filter to get only the Latte orders:\n', latteOrders)

const customerNames = orders.map(order => order.customer)
console.log('\nUse map to return an array of customer names\n', customerNames)

const totalPaid = orders
    .filter(order => order.isPaid)
    .reduce((sum, order) => sum + order.price, 0)
console.log('\nUse reduce to get the total from paid orders only', '[', totalPaid, ']')

const sortedByPrice = [...orders].sort((a, b) => b.price - a.price)
// orders
// [...orders]
console.log('\nUse sort to sort the array by highest to lowest in price\n', sortedByPrice)

const discountedLargeOrders = orders.map(order => {
    if (order.size === 'large') {
        return { ...order, price: (order.price * 0.9).toFixed(2) }
    }
    return order;
});
console.log('\nUse map to return a new array where every "large" size drink has a 10% discount applied to its price\n', discountedLargeOrders)

const hasUnpaidOrder = orders.some(order => !order.isPaid)
console.log('\nUse some to check if there exists an unpaid order', '[', hasUnpaidOrder, ']');

const allAboveTwo = orders.every(order => order.price > 2)
console.log('\nUse every to check that all items are above $2 in price', '[', allAboveTwo, ']');

const withVanilla = orders.find(order => order.extras.includes('vanilla syrup'))
console.log('\nUse find to find a drink with vanilla syrup\n', withVanilla)