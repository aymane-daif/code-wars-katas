// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {
  let counts = [];
  for (let ingredient in recipe) {
    if (!available[ingredient]) return 0;

    counts.push(Math.floor(available[ingredient] / recipe[ingredient]));
  }
  return Math.min(...counts);
}

// must return 2
console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);

// must return 0
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
