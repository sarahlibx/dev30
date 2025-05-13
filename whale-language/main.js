const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    // console.log(letters)

    if (letter === 'e' || letter === 'u') {
        resultArray.push(letter);
    }

        for (let j = 0; j < vowels.length; j++) {
        const whaleLetters = vowels[j];
        // console.log(whaleLetters);

            if (letter === whaleLetters) {
            resultArray.push(letter);  
        }
    }
};

const resultString = resultArray.join('').toUpperCase();

console.log(resultString); 