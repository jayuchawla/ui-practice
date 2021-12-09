// 1. return a passed string with letters in alphabetical order
const alphabeticalOrder = (str) => str.split('').sort((a,b) => a > b ? 1 : -1).join('');
console.log(alphabeticalOrder('hello'))

// 2. count vowels in a string
const countVowels = (str, hitLetters=['a','e','i','o','u']) => str.split('').filter(letter => hitLetters.indexOf(letter) > -1).length;
console.log(countVowels('hello'));

// 3. convert an amount to coins
const convertToCoins = (amount, den) => {
    const coins = [];
    for(let i = 0; i<den.length; i++) {
        const coinFreq = Math.floor(amount / den[i]);
        amount = amount % den[i];
        for(let j = 0; j<coinFreq; j++) {
            coins.push(den[i]);
        }
    }
    return coins;
}

console.log(convertToCoins(24, [25, 10, 5, 2, 1]));