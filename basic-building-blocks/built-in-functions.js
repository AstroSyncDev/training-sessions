// const totalMarks = 50;
// const obtainedMarks = 47;

// const percentage = 89.1598494894;

// console.log(
//     percentage.toFixed(2)
// )

// const arr = [154, 23, 50, 12, 5343]

// console.log(Math.max(...arr))

// const str = 'hello world';

// console.log(str.startsWith('hello'))
// console.log(str.startsWith('h'))
// console.log(str.startsWith('t'))
// console.log(str.endsWith('d'))
// console.log(str.endsWith('.'))

// const str = 'hello, my, name, is, softy';

// console.log(
//     str.split(' ')
// )
// console.log(
//     str.split(',')
// )
// console.log(
//     str.split(', ')
// )
// console.log(
//     str.split('m')
// )


// const str = 'hello my name is softy';

// if (str.match('my')) {
//     console.log('string contains my')
// } else {
//     console.log('string doesn\'t contain my')
// }

// const str = 'hello my name is softy';

// console.log(
//     str.replace('softy', 'mody')
// )

// const str = 'hallo hello hillo hollo my name is softy hello';

// console.log(
//     str.replace('hello', 'replaced')
// )

// console.log(
//     str.replace(/h\wllo/g, 'replaced')
// )

// don't use replaceAll because it is not supported for all javascript versions

// const customer = {
//     name: 'softy',
//     age: 18
// }

// console.log(
//     Object.keys(customer)
// )

// console.log(
//     Object.values(customer)
// )

// console.log(
//     Object.entries(customer)
// )

// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// const arr2 = ['e', 'f', 'g']

// const arr3 = [...arr, ...arr2];
// const arr4 = arr.concat(arr2)

// console.log(arr3)

// console.log(
//     // arr.slice(3, 2),
//     // arr.slice(4, 1),
//     arr.slice(3, 6)
// )


// console.log(
//     arr.join(', ')
// )

// for (var i = 1; i < arr.length + 2; i++) {
//     console.log(arr[i])
// }

// const newArr = arr.forEach((el) => {
//     // console.log(el)
//     return el;
// })

// const arr = [2, 4, 6, 8, 10]

// const newArr2 = arr.map((el) => {
//     // console.log(el)
//     return el * 2;
// })

// console.log(newArr2)

// const arr = ['softy', 'jan', 'squil', 'beshoy']
// const newArr = arr.filter(el => el !== 'softy')

// console.log(
//     newArr
// )

// const arr = ['softy', 'jan', 'squil', 'beshoy']
// const newArr = []
// for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     if (el !== 'softy') {
//         newArr.push(el)
//     }
// }
// console.log(newArr)


// const arr = ['softy', 'jan', 'squil', 'beshoy']

// console.log(
//     arr.includes('softyuuu')
// )

// const arr = [
//     {
//         name: 'jan',
//         age: 18,
//         isPoor: false
//     },
//     {
//         name: 'softy',
//         age: 18,
//         isPoor: true
//     },
//     {
//         name: 'mody',
//         age: 18,
//         isPoor: true
//     },
//     {
//         name: 'squil',
//         age: 18,
//         isPoor: true
//     },
//     {
//         name: 'beshoy',
//         age: 18,
//         isPoor: true
//     }
// ]

// const found1 = arr.find(el => el.name === 'softy')
// const found2 = arr.find(el => true)
// const found3 = arr.find(el => false)
// const found3 = arr.find(el => el.age === 18)
// const found3 = arr.filter(el => el.age === 18)

// console.log(found1)
// console.log(found2)
// console.log(found3)

// const arr = [
//     [[[1, 2, 3], 2, 3], 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(
//     arr.flat()
// )


// const arr = ['softy', 'jan', 'squil', 'beshoy']

// // Some function: return true if ANY of the element fulfills the condition
// console.log(
//     'some:', arr.some(v => v === 'softy')
// )

// // Every function: return true if ALL of the elements fulfill the condition
// console.log(
//     'every:', arr.every(v => v === 'softy')
// )

// const sandwiches = [
//     {
//         bread: 'Wheat',
//         sauces: ['ketchup', 'mayo']
//     },
//     {
//         bread: 'White',
//         sauces: ['ketchup']
//     },
//     {
//         bread: 'Brown',
//         sauces: ['chilli', 'sriracha']
//     },
// ]

// const foundSandwich = sandwiches.find(sandwich => sandwich.sauces.some(sauce => sauce === 'ketchup'))
// const foundSandwich = sandwiches.filter(sandwich => sandwich.sauces.every(sauce => sauce === 'ketchup'))

// console.log(foundSandwich)

// squil: 2nd
// beshoy: 2nd
// jan: 2nd

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     // sum = sum + num;
//     sum += num;
// }

// console.log(sum)

// const sum = arr.reduce((sum, el) => sum + el, 0)
// console.log(sum)

// reduce((accumulator, current) => {
//      return-the-value-of-accumulator
// }, initial-value)

// const sum = arr.reduce((sum, el) => {
//     const newSum = sum + el;
//     return sum
// }, 0)

// var sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     const newSum = sum + el;
//     sum = newSum
// }

// console.log(sum)

// const customers = [
//     {
//         name: 'jan',
//         age: 100,
//         isPoor: false
//     },
//     {
//         name: 'softy',
//         age: 68,
//         isPoor: true
//     },
//     {
//         name: 'mody',
//         age: 10,
//         isPoor: true
//     },
//     {
//         name: 'squil',
//         age: 60,
//         isPoor: true
//     },
//     {
//         name: 'beshoy',
//         age: 50,
//         isPoor: true
//     }
// ]

// const customerNames = customers.reduce((names, customer) => customer.age < 55 ? names.concat(customer.name) : names, [])

// console.log(customerNames)