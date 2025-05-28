const menu = {
    courses: {
        appetizers: [], 
        mains: [], 
        desserts: []
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName, 
            price: dishPrice
        };
        console.log(menu.courses[courseName]);
        menu.courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = menu.courses[courseName];
        const randomSelector = Math.floor(Math.random() * dishes.length);
        return dishes[randomSelector];
    },
    generateRandomMeal() {
        const appetizer = menu.getRandomDishFromCourse('appetizers');
        const main = menu.getRandomDishFromCourse('mains');
        const dessert = menu.getRandomDishFromCourse('desserts');
        return `Your meal will begin with ${appetizer.name} for $${appetizer.price}, followed by the ${main.name} for $${main.price} and finished with ${dessert.name} for $${dessert.price}. Your total for the meal will be $${appetizer.price + main.price + dessert.price}.`;
    }
};

menu.addDishToCourse('appetizers', 'salad', 7);
menu.addDishToCourse('appetizers', 'brussel sprouts', 9);
menu.addDishToCourse('appetizers', 'mac & cheese', 8);
menu.addDishToCourse('mains', 'tofu scramble', 13);
menu.addDishToCourse('mains', 'buffalo chick-n sandwich', 16);
menu.addDishToCourse('mains', 'penne vodka', 21);
menu.addDishToCourse('desserts', 'ice cream sundae', 6);
menu.addDishToCourse('desserts', 'chocolate chip cookies', 4);
menu.addDishToCourse('desserts', 'banana cream pie', 8);

console.log(menu.courses);

const meal = menu.generateRandomMeal();

console.log(meal);