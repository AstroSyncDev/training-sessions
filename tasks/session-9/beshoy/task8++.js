const orders = [
  { customer: 'Alice', drink: 'Latte', size: 'medium', price: 4.5, extras: ['soy milk'], isPaid: true },
  { customer: 'Bob', drink: 'Espresso', size: 'small', price: 3, extras: [], isPaid: true },
  { customer: 'Charlie', drink: 'Cappuccino', size: 'large', price: 5.5, extras: ['extra shot'], isPaid: false },
  { customer: 'Dana', drink: 'Latte', size: 'medium', price: 4.5, extras: ['vanilla syrup'], isPaid: true },
  { customer: 'Eli', drink: 'Americano', size: 'large', price: 4.5, extras: [], isPaid: true },
  { customer: 'Fay', drink: 'Mocha', size: 'medium', price: 5, extras: ['whipped cream'], isPaid: false },
  { customer: 'Grace', drink: 'Flat White', size: 'small', price: 3.5, extras: ['almond milk'], isPaid: true },
];
console.log('lattes:')
const lattes = orders.reduce((acc, order) => order.drink === 'Latte' ? acc.concat(order) : acc, [])
console.log(lattes)
console.log('espresso:')
const Espressos = orders.reduce((acc, order) => order.drink === 'Espresso' ? acc.concat(order) : acc, [])
console.log(Espressos)
console.log('Mochas:')
const Mochas = orders.reduce((acc, order) => order.drink === 'Mocha' ? acc.concat(order) : acc, [])
console.log(Mochas)
console.log('Flat white:')
const Flat_white = orders.reduce((acc, order) => order.drink === 'Flat White' ? acc.concat(order) : acc, [])
console.log(Flat_white)
console.log('Americano:')
const Americanos = orders.reduce((acc, order) => order.drink === 'Americano' ? acc.concat(order) : acc, [])
console.log(Americanos)
console.log('Cappuccino:')
const Cappuccino = orders.reduce((acc, order) => order.drink === 'Cappuccino' ? acc.concat(order) : acc, [])
console.log(Cappuccino)
