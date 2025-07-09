//var Bread=['brownbread','milkbread','white bread','sugar-free bread']
var main = ['beef', 'chicken', 'mutton']
var suace = ['mayo', 'ketchup', 'mustard', 'hotsuace', 'ranch', 'sriracha', 'chilli garlic']
//var bread='';
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function isSpicy(sauce) {
    var spicySauces = ['hotsuace', 'sriracha', 'chilli garlic'];
    return spicySauces.includes(sauce);

}

function getBread() {
    var Bread = ['brownbread', 'milkbread', 'white bread', 'sugar-free bread']
    return getRandom(Bread)
}
function getMain() {
    // main
    var main = ['beef', 'chicken', 'mutton']
    return getRandom(main)
}
function getSauce1() {
    var suace1 = ['mayo', 'ketchup', 'mustard']

    return getRandom(suace1)
}
function getSauce2() {
    var suace2 = ['hotsuace', 'ranch', 'sriracha', 'chilli garlic']

    const selected_sauce2 = getRandom(suace2)
    //console.log('sauce is ',selected_sauce2)

    if (isSpicy(selected_sauce2)) {
        console.log('(spicy)')
    }

    return selected_sauce2
}
function getVegatables(main) {
    switch (getRandom(main)) {
        case 'beef':
            return ['lettuce', 'tomatoes']
            break;
        case 'chicken':
            return ['cucumbers', 'onions']
            break;
        case 'mutton':
            return ['basil', 'olives', 'grated carrot']
        default:
            return ['unknwon']
            break;

    }
}


for (let i = 1; i <= 3; i++) {

    console.log('sandwich number', i)
    console.log('-suace is', getSauce2())
    console.log('-bread is', getBread())
    console.log('-main is', getMain())
    console.log('-suace is', getSauce1())

    const veg = getVegatables(main)
    console.log('-vegatables is', veg)



}

// mispellings
// output does not comply
// sauce randomization biasness
// (scalability)