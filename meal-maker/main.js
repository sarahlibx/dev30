const menu = {
    courses: {
        appetizers: [], 
        mains: [], 
        desserts: []
    },
    addDishToCourse: function(courseName, dishName, dishPrice) {
        let dish = {name: dishName, price: dishPrice}
        this[courses][courseName].push(dish);
    },
    getRandomDishFromCourse: function(courseName) {
        let dishes = this[courses];
        let randomSelector = Math.floor(Math.random()*dishes.length);
        return dishes[randomSelector];
    },
    generateRandomMeal: function() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        return `Your meal will begin with ${appetizer.name}, followed by the ${main.name} and finished with ${dessert.name}. Your total for the meal will be $${bill}.`;
    }
};

menu.addDishToCourse('appetizers', 'salad', 7);
menu.addDishToCourse('appetizers', 'brussel sprouts', 9);
menu.addDishToCourse('appetizers', 'mac & cheese', 8);
menu.addDishToCourse('mains', 'tofu scramble', 13);
menu.addDishToCourse('mains', 'buffalo chick-n sandwich', 16);
menu.addDishToCourse('mains', 'penne vodka', 21);
menu.addDishToCourse('dessert', 'ice cream sundae', 6);
menu.addDishToCourse('dessert', 'chocolate chip cookies', 4);
menu.addDishToCourse('dessert', 'bananana cream pie', 8);

console.log(menu.courses);

const meal = menu.generateRandomMeal();

console.log(meal);