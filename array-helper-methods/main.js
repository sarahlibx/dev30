// function that performs "saving user"
var saveUser = function (user) {
  console.log('saving', user.name);
}

// function that iterates through the index of the array
var saveUsers = function () {
  var users = [
    { id: 15, name: 'Bob' },
    { id: 23, name: 'Jimbo' },
    { id: 35, name: 'Cathy' }
  ];

// forEach that invokes the function for the users into saveUser
 users.forEach(function (u) {
    saveUser(u);
 });
};

// items in the array
var boxes = [
  { length: 10, width: 15, height: 20 },
  { length: 15, width: 20, height: 25 },
  { length: 20, width: 25, height: 30 },
  { length: 25, width: 30, height: 35 },
  { length: 30, width: 35, height: 40 },
];

// empty array to place the box volume into
var volumes = [];

// forEach function to solve problem
boxes.forEach(function (box) {
    volumes.push(box.length * box.width * box.height)
});

// output of volumes = (5) [3000, 7500, 15000, 26250, 42000]

//use map to create an array of formatted strings that describe each budget item in the format 'title (amount)'
var budgets = [
  { title: "Rent", amount: 1200 },
  { title: "Groceries", amount: 300 },
  { title: "Phone", amount: 50 },
  { title: "Gas", amount: 200 },
  { title: "Internet", amount: 45 },
];

//stringifying the budget array items
var stringBudget = budgets.map(function (budget){
    return budget.title + " (" + budget.amount + ")";
});

//console.log(stringBudget);

// make each size its own array 
var boxes = [
  { length: 10, width: 15, height: 20 },
  { length: 15, width: 20, height: 25 },
  { length: 20, width: 25, height: 30 },
  { length: 25, width: 30, height: 35 },
  { length: 30, width: 35, height: 40 },
];

var lengths;

var volumes;

// list of lengths
var lengthArray = boxes.map(function (box) {
    return box.length;
});

// list of box volumes
var volumeArray = boxes.map(function (box) {
    return box.length * box.width * box.height;
});

//console.log(volumeArray);

//console.log(lengthArray);

var users = [
  { id: 1, name: "Bob", email: "bob@gmail.com" },
  { id: 2, name: "Cindy", email: "cindy@gmail.com" },
  { id: 3, name: "Susan", email: "susan@gmail.com" },
  { id: 4, name: "Sarah", email: "sarah@gmail.com" },
  { id: 5, name: "Tim", email: "tim@gmail.com" },
];

var pluck = function (array, property) {
  return array.map(function (item) {
    return item[property];
  });
};

// console.log(pluck(users, "email")); 

// returns ['bob@gmail.com', `cindy@gmail.com`, `susan@gmail.com`, `sarah@gmail.com`, `tim@gmail.com` ];

// find user whose username is "JimBob59"
var users = [
  { id: 1, username: 'Susan19', admin: false },
  { id: 2, username: 'Antonio10', admin: false },
  { id: 3, username: 'Fred15', admin: true },
  { id: 4, username: 'Tim43', admin: false },
  { id: 5, username: 'JimBob59', admin: true },
  { id: 6, username: 'Clark6', admin: false },
  { id: 7, username: 'Jameson35', admin: true },
  { id: 8, username: 'Jessica40', admin: false },
  { id: 9, username: 'Jaleesa13', admin: false },
  { id: 10, username: 'Yoni45', admin: false }
]

// Set that user object to a variable called selectedUser
var selectedUser = users.find(function (user) {
    return user.username === 'JimBob59';
});

// console.log(selectedUser);

// return which item in the array has a price that's less than 100
var shoes = [
  { name: 'Nike', price: 200 },
  { name: 'Red Wings', price: 250 },
  { name: 'Vans', price: 150 },
  { name: 'Converse', price: 160 },
  { name: 'Reebok', price: 130 },
  { name: 'New Balance', price: 175 },
  { name: 'Adidas', price: 95 },
  { name: 'Keds', price: 140 },
  { name: 'Crocs', price: 135 }
];

// Set this value to a variable called lessThan100
var lessThan100 = shoes.find(function (shoe) {
    return shoe.price < 100; 
});

// console.log(lessThan100);

// result { name: 'Adidas', price: 95 }

var findWhere = function (array, objCriteria) {
  var property = Object.keys(objCriteria)[0];

  var result = array.find(function(element) {
    return element[property] === objCriteria[property]; 
  });

  return result;
}

//console.log(findWhere(shoes, {price: 95}));

var myShoe = findWhere(shoes, {price: 95}); 

// using filter -- We updated our posts to make the first three posts invalid
var posts = [
  {
    text:
      "cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea cursus in hac habitasse platea",
    platform: "twitter",
  },
  {
    text: "egestas erat imperdiet sed euismod Mark Zuckerberg Sucks!",
    platform: "facebook",
  },
  { text: "egestas erat imperdiet sed euismod", platform: "myspace" },
  { text: "risus viverra adipiscing at in", platform: "facebook" },
  { text: "ullamcorper eget nulla facilisi etiam", platform: "instagram" },
  { text: "feugiat pretium nibh ipsum consequat", platform: "twitter" },
  { text: "sit amet mattis vulputate enim", platform: "facebook" },
];

// Loop through each post to determine if it is acceptable, the function passed to filter as a parameter takes in a post object and returns either true/false to keep it in the array of posts returned by filter.
var acceptablePosts = posts.filter(function (post) {
  // If we are on twitter, make sure that the post has < 280 characters
  if (post.platform == "twitter") {
    return post.text.length <= 280;
  }

  // If we are on facebook or instagram, make sure that our dear leader isn't mentioned
  if (post.platform == "facebook" || post.platform == "instagram") {
    return !post.text.includes("Mark Zuckerberg");
  }

  // If it is some other platform, don't post it
  return false;
});


// Use filter to create a new array called shortLanguages which only contains languages whose name is 4 characters or less.
var languages = ["JavaScript", "Ruby", "Java", "Python", "C", "Swift"];

var shortLanguages = languages.filter(function (lang) {
  return lang.length <= 4;
});

// ['Ruby', 'Java', 'C'];
// console.log(shortLanguages);

// Use filter to create a new array (called whatever you decide) with only shoes that are between $50 and $100
var shoes = [
  { name: "Nike", price: 200 },
  { name: "Red Wings", price: 250 },
  { name: "Vans", price: 50 },
  { name: "Converse", price: 60 },
  { name: "Reebok", price: 130 },
  { name: "New Balance", price: 75 },
  { name: "Adidas", price: 95 },
  { name: "Keds", price: 40 },
  { name: "Crocs", price: 35 },
];

var affordableShoes = shoes.filter(function (shoe) {
  return shoe.price >= 50 && shoe.price <= 100;
});

// console.log(affordableShoes);

// create an a function called filterOut which does the opposite of filter - any items in the original array that return true should not be part of the new array
var shoes = [
  { name: "Nike", price: 200 },
  { name: "Red Wings", price: 250 },
  { name: "Vans", price: 50 },
  { name: "Converse", price: 60 },
  { name: "Reebok", price: 130 },
  { name: "New Balance", price: 75 },
  { name: "Adidas", price: 95 },
  { name: "Keds", price: 40 },
  { name: "Crocs", price: 35 },
];

var filterOut = function (array, iteratorFunction) {
return array.filter(function(item) {
return !iteratorFunction(item);
});
};

var priceRangeNot50to100 = filterOut(shoes, function (shoe) {
return shoe.price >= 50 && shoe.price <= 100;
});

// console.log(priceRangeNot50to100);

// Use reduce to find the total cost of buying all the shoes
var shoes = [
  { name: "Nike", price: 200 },
  { name: "Red Wings", price: 250 },
  { name: "Vans", price: 50 },
  { name: "Converse", price: 60 },
  { name: "Reebok", price: 130 },
  { name: "New Balance", price: 75 },
  { name: "Adidas", price: 95 },
  { name: "Keds", price: 40 },
  { name: "Crocs", price: 35 },
];

var shoeTotal = shoes.reduce(function (total, shoe) {
  return shoe.price + total;
}, 0);

// console.log(shoeTotal);

// Use reduce to tally the total number of beers that are IPAs and the beers that are Stouts
var beers = [
  { name: '512 IPA', type: 'IPA' },
  { name: 'Breakfast Stout', type: 'Stout' },
  { name: 'Pernicious IPA', type: 'IPA' },
  { name: '90 Minute IPA', type: 'IPA' },
  { name: 'Obsidian Stout ', type: 'Stout' }
]

var beerStyles = beers.reduce(function (acc, beer) {
// first check to see if our acc object already has this beer type as a property
  if (acc.hasOwnProperty(beer.type)) {
    // if it does, increment the count of that property
    acc[beer.type] += 1
  } else {
    // if it does not then set it to 1
    acc[beer.type] = 1;
  }

  return acc
}, {});

// console.log(beerStyles);
// {IPA: 3, Stout: 2}

// Create a function called unique which utilizes find and reduce to return a new array without the duplicate values
var numbers = [1, 1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5];

var unique = function (array) {
  return array.reduce(function (accumulator, num) {
    var exists = accumulator.find(function (item) {
      return num === item;
    });
    
    if (!exists) {
      accumulator.push(num);
    };
        
    return accumulator;
  }, []);
}

console.log(unique(numbers)); 
// [1, 2, 3, 4, 5]