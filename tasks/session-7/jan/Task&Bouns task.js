function getBread() {
    const breads = ["Brown Bread", "Milk Bread", "White Bread", "Sugar-free Bread"];
    return breads[Math.floor(Math.random() * breads.length)];
}
function getMain() {
    const mains = ["Chicken", "Beef", "Mutton"];
    return mains[Math.floor(Math.random() * mains.length)];
}
function getSauce() {
    const sauces = ["Mayo", "Ketchup", "Mustard", "Hot Sauce", "Ranch", "Sriracha", "Chili Garlic Sauce"];
    const selected = [];
    while (selected.length < 2) {
        const randomSauce = sauces[Math.floor(Math.random() * sauces.length)];
        if (!selected.includes(randomSauce)) {
            selected.push(randomSauce);
        }
    }
    return selected;
}
function getVegetables(main) {
    let vegList = [];
    if (main === "Beef") vegList = ["Lettuce", "Tomatoes"];
    if (main === "Chicken") vegList = ["Cucumbers", "Onions"];
    if (main === "Mutton") vegList = ["Basil", "Olives", "Grated Carrot"];

    const randomIndex = Math.floor(Math.random() * vegList.length);
    return [vegList[randomIndex]];
}
const spicyList = ["Hot Sauce", "Sriracha", "Chili Garlic Sauce"];

for (let i = 1; i <= 3; i++) {
    const bread = getBread();
    const main = getMain();
    const sauces = getSauce();
    const vegetables = getVegetables(main);
    const isSpicy = sauces.some(sauce => spicyList.includes(sauce));

    console.log(`Sandwich ${i}:
  - Bread: ${bread}
  - Main: ${main}
  - Sauce: ${sauces}
  - Vegetables: ${vegetables}
  - Spicy: ${isSpicy ? "Yes" : "No"}\n`);
}