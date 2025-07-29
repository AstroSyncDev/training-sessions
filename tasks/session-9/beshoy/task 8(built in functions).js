const orders = [
  { customer: 'Alice', drink: 'Latte', size: 'medium', price: 4.5, extras: ['soy milk'], isPaid: true },
  { customer: 'Bob', drink: 'Espresso', size: 'small', price: 3, extras: [], isPaid: true },
  { customer: 'Charlie', drink: 'Cappuccino', size: 'large', price: 5.5, extras: ['extra shot'], isPaid: true },
  { customer: 'Dana', drink: 'Latte', size: 'medium', price: 4.5, extras: ['vanilla syrup'], isPaid: true },
  { customer: 'Eli', drink: 'Americano', size: 'large', price: 4.5, extras: [], isPaid: true },
  { customer: 'Fay', drink: 'Mocha', size: 'medium', price: 5, extras: ['whipped cream'], isPaid: true },
  { customer: 'Grace', drink: 'Flat White', size: 'small', price: 3.5, extras: ['almond milk'], isPaid: true },
];
console.log('********1********')
console.log(orders.filter(orders => orders.drink === 'Latte'))
console.log('*******2********')
const names = orders.map((orders) => {
  return orders.customer
})
console.log(names)
console.log('*******3********')
const paidOrders = orders.filter(orders => orders.isPaid === true)
const totalPaid = paidOrders.reduce((sum, orders) => sum + orders.price, 0)
console.log(totalPaid)
console.log('*******4********')
orders.sort((a, b) => a.price - b.price)
console.log(orders)
console.log('*******5********')
// const largeDrink=orders.filter(orders=>orders.size==='large')
// const discount=0.9
// const newArr2=largeDrink.map((largeDrink)=>{
// return largeDrink.price-largeDrink.price*0.1
// })
// console.log(newArr2)
const newArr = orders.map(order => {
  if (order.size === 'large') {
    order.price *= 0.9
  }
  return order
})
console.log(newArr)
console.log('*******6********')
console.log(
  orders.some(order => order.isPaid === false)
)
console.log('*******7********')
console.log(
  orders.every(order => order.price > 2)
)

console.log('*******8********')
const found1 = orders.find(order => order.extras.includes('vanilla syrup'))
console.log(found1)

