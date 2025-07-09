let breads = ['Brown Bread', 'Milk Bread', 'White Bread', 'Sugar-free Bread'];
let mains = ['Chicken', 'Beef', 'Mutton'];
let sauces = ['Hot Sauce', 'Siracha', 'Chili Garlic Sauce', 'Mayo', 'Ketchup', 'Mustard', 'Ranch',]
let bread;
let main;
let sauce;
let spicy = ''
let vegetables;
function getSandwich(breads, mains, sauces, number) {
    let x = Math.floor(Math.random() * breads.length)
    let y = Math.floor(Math.random() * mains.length)
    let z = Math.floor(Math.random() * sauces.length)
    bread = breads[x]
    sauce = sauces[z]
    main = mains[y]
    if (z === 0 || z === 1 || z === 2) {
        spicy = '(spicy)'
    } else {
        spicy = ''
    };
    switch (y) {
        case 0:
            vegetables = 'Cucumbers, Onions'
            break;
        case 1:
            vegetables = 'Lettunce, Tomatoes'
            break;
        case 2:
            vegetables = 'Basil, Olives, Grated arrot'
            break;

    }
    console.log('Sandwich', number + spicy + ':', '\n', '-', 'Bread:', bread, '\n', '-',
        'Main:', main, '\n', '-', 'sauce:', sauce, '\n', '-', 'Vegetables:', vegetables);
}
for (let d = 1; d < 11; d++) {
    getSandwich(breads, mains, sauces, d)
}

// global variables
// readability