const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const letters = input[i];
    // console.log(letters)

    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i].toUpperCase());
    }

        for (let j = 0; j < vowels.length; j++) {
        const whaleLetters = vowels[j];
        // console.log(whaleLetters);

            if (input[i] === vowels[j]) {
            resultArray.push(vowels[j].toUpperCase());  
        }
    }
};


console.log(resultArray.join('')); 