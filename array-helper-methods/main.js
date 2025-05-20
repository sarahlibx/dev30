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

console.log(findWhere(shoes, {price: 95}));

var myShoe = findWhere(shoes, {price: 95}); 