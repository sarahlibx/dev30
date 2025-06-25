// Write a function that takes an array of integers, and finds the pair of adjacent elements that has the largest product and return that product.

var numbers = [1, 3, 5, 8];
var products =[];

for (var i = 0; i < numbers.length; i++) {
    var currentNum = numbers[i];
    var nextNum = numbers[i + 1];

    var product = currentNum * nextNum;

    if (product) {
        products.push(product);
    }

    products.push(product);
}

// console.log(products);

var largestProduct = Math.max(...products);

//console.log(largestProduct);

// Write a function that takes an array of integers, and finds the pair of adjacent elements that has the largest product and return that product.
var samples = {
    sample1: [5, 1, 2, 3, 1, 4],
    sample2: [9, 5, 10, 2, 24, -1],
    sample3: [12, 4, 8, 22, 36, 0]
};

let numSamples = samples[Object.keys(samples)[0]].length;

let sampleAverages = [];

for (let i = 0; i < numSamples; i++) {
    let sampleTotal = 0;
    let totalSamples = 0;

    for (prop in samples) {
        totalSamples += 1;
        sampleTotal += samples[prop][i];
    }

    sampleAverages.push(Math.floor(sampleTotal / totalSamples));
}

let lowestSample = Math.min(...sampleAverages);

console.log(sampleAverages);
console.log(lowestSample);

console.log(sampleAverages.indexOf(lowestSample) +1);