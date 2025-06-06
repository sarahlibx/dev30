var mashedPotatoesRecipe = {
  name: "Mashed Potatoes",
  serves: 4,
  ingredients: [
    {
      "name": "water"
    },
    {
      "name": "potatoes",
      "count": 2
    },
    {
      "name": "salt",
      "count": 0.5,
      "unit": "teaspoons"
    },
    {
      "name": "pepper",
      "count": 0.25,
      "unit": "teaspoons"
    },
      {
      "name": "butter",
      "count": 2,
      "unit": "tablespoons"
    }
  ],
  directions: [
    "Add potatoes to a pot and cover with an inch of water.",
    "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
    "Simmer for 20 minutes or until potatoes are fork tender.",
    "Drain water from potatoes, leaving the potatoes in the original pot.",
    "Add remaining ingredients to the pot with the potatoes.",
    "Mash potatoes until they reach the desired consistency.",
    "Serve immediately, or cover and refrigerate."
  ]
};

// mashedPotatoesRecipe.ingredients[2].count

mashedPotatoesRecipe.ingredients.forEach(function (ingredientObject){
    if(ingredientObject.name === 'butter') {
        ingredientObject.name = 'margarine';
    }
});