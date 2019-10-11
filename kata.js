const cakes = (recipe, available) => {
  for (const ingredient of Object.keys(recipe))
    if (!(ingredient in available)) return 0

  let numberOfCakes = []

  for (const ingredient of Object.keys(available)) {
    let result = available[ingredient] / recipe[ingredient]
    if (result < 1) return 0
    if (isNaN(result)) continue
    numberOfCakes.push(Math.floor(result))
  }

  return Math.min(...numberOfCakes)
}

let recipe = {apples:3,flour:300,sugar:150,milk:100,oil:100}
let available = {sugar:500,flour:2000,milk:2000,apples:15,oil:20}

// console.log(cakes(recipe, available), "- Expected", 0)

recipe = {flour: 500, sugar: 200, eggs: 1};
available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available), 2, 'Wrong result for example #1');

// recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
// available = {sugar: 500, flour: 2000, milk: 2000};
// console.log(cakes(recipe, available), 0, 'Wrong result for example #2');
