let bread = ['Brown Bread', 'Milk Bread', 'White Bread', 'Sugar-free Bread'];
let main = ['Chicken', 'Beef', 'Mutton'];
let sauce = ['Hot Sauce', 'Siracha', 'Chili Garlic Sauce', 'Mayo', 'Ketchup', 'Mustard', 'Ranch',]
let sandwich_main;
let sandwich_sauce;
for (let n = 1; n < 4; n++) {

    function getbread() {
        let x = Math.floor(Math.random() * 4)
        return bread[x]
    };

    function getmain() {
        let x = Math.floor(Math.random() * 3)
        sandwich_main = main[x]
        return main[x]
    }
    function getsauce() {
        let x = Math.floor(Math.random() * 7)
        sandwich_sauce = sauce[x]
        return sauce[x]

    }
    function getvegetables() {
        switch (sandwich_main) {
            case main[1]:
                return 'Lettunce, Tomatoes'
            case main[0]:
                return 'Cucumbers, Onions'
            case main[2]:
                return 'Basil, Olives, Grated arrot'
        }
    }
    getsauce()
    if (sandwich_sauce === sauce[0] || sandwich_sauce === sauce[1] || sandwich_sauce === sauce[2]) {
        console.log('Sandwch', n, '(spicy)', ':', '\n', '-', 'Bread:', getbread(), '\n', '-',
            'Main:', getmain(), '\n', '-', 'sauce:', sandwich_sauce, '\n', '-', 'Vegetables:', getvegetables());
    } else {
        console.log('Sandwch', n + ':', '\n', '-', 'Bread:', getbread(), '\n', '-',
            'Main:', getmain(), '\n', '-', 'sauce:', sandwich_sauce, '\n', '-', 'Vegetables:', getvegetables());
    }
}

// putting a function inside a loop
// not using return value of functions (no output)
// not using the params (no input)
// console logs
// global variables