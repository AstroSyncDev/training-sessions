// 1d array
// const name1 = 'softy'
// const name2 = 'squil'
// const name3 = 'beshoy'

// const names = ['softy', 'squil', 'beshoy', 'mody', 'isana', 'ikkeee', 'lime']
// console.log(names)

// names[3] = 'mody'
// console.log(names)

// useful built-in functions

// add item to array
// names.push('mody')
// console.log(names)

// remove last item from array
// names.pop()
// console.log(names)

// remove first item from array
// names.shift()
// console.log(names)

// remove specific item(s) (at/after) an index
// names.splice(2, 1)
// names.splice(3, 1)
// console.log(names)

// 2d array
// const names2 = ['softy', 'squil', 'beshoy']
// const ages = [24, 23, 64]
// const countries = ['pakistan', 'america', 'egypt']

// const employees = [
//     ['softy', 'squil', 'beshoy'],
//     [24, 23, 64],
//     ['pakistan', 'america', 'egypt']
// ]

// console.log(employees[2][1])
// console.log(employees[0][2])
// employees[0].pop()
// console.log(employees)

// 3d arrays
// const company1Employees = [
//     ['softy', 'squil', 'beshoy'],
//     [24, 23, 64],
//     ['pakistan', 'america', 'egypt']
// ]
// const company2Employees = [
//     ['ikkee', 'isana', 'lime'],
//     [24, 23, 64],
//     ['pakistan', 'america', 'egypt']
// ]
// const company3Employees = [
//     ['talan', 'wabi', 'crud'],
//     [24, 23, 64],
//     ['pakistan', 'america', 'egypt']
// ]

// array of arrays which are also an array of arrays
const companiesEmployees = [
    [
        ['softy', 'squil', 'beshoy'],
        [24, 23, 64],
        ['pakistan', 'america', 'egypt']
    ], [
        ['ikkee', 'isana', 'lime'],
        [24, 23, 64],
        ['pakistan', 'thailand', 'egypt']
    ], [
        ['talan', 'wabi', 'crud'],
        [24, 23, 64],
        ['pakistan', 'america', 'egypt']
    ]
]
console.log(companiesEmployees[2][0][2])
console.log(companiesEmployees[1][2][1])