// 1. new string from given str by adding 3 chars from beg and end, given str must be 3 chars wide or more
const newStr = (str) => str.length >= 3 ? str.slice(0,3)+str.slice(str.length-3,str.length) : str; 

console.log(newStr('he'))

// 2. extract first half of string of even length
const firstHalf = (str) => str.length%2 === 0 ? str.slice(0, str.length/2) : null

console.log(firstHalf('hell'))

// 3. concat 2 strs except first 2 chars
const concatSkipFirst2 = (s1, s2) => `${s1.slice(1,s1.length)}${s2.slice(1,s2.length)}`

console.log(concatSkipFirst2('hello', 'world'))

// 4. given 2 nums, which is closer to 100
const nearTo100 = (n1, n2) => Math.abs(100-n1) > Math.abs(100-n2) ? n2:n1;

console.log(nearTo100(12,102));

// 5. check if a given sstring contains 2 to 4 occurences of a char
const countCharOccurence = (str, char) => str.split('').filter(c => c === char).length;
const count2to4Occurence = (str, char) => countCharOccurence(str, char) > 1 &&  countCharOccurence(str, char) < 5;
console.log(count2to4Occurence('ooh', 'o'));
console.log(count2to4Occurence('oooh', 'o'));
console.log(count2to4Occurence('oh', 'o'));

// 6. num of even digits in an array
const numEven = (arr) => arr.filter(num => num%2===0).length;
console.log(numEven([1,2,3,4,66,6]))

// 7. find number of even numbers upto a given number
const numEvenMax = (max) => Math.ceil(max/2);
console.log(numEvenMax(7)); 

// 8. check if an arr is sorted in asc order
const checkSorted = (arr) => {
    for(let i = 0; i<arr.length; i+=1) {
        if(arr[i] > arr[i+1]) return false;
    }
    return true;
}
console.log(checkSorted([1,2,3,4,5]));
console.log(checkSorted([1,2,3,1,5]));

// 9. largest even number from arr
const largestEven = (arr) => Math.max(...arr.filter(num => num % 2 === 0))
console.log(largestEven([1,2,3,4,0,99, 98]))

// 10. replace first digit with a $
const replaceFirstDigit = (str) =>  str.replace(/[0-9]/, '$') // or \d
const replaceAllDigit = (str) =>  str.replace(/\d/g, '$') 
console.log(replaceFirstDigit('Hell11o@world'));
console.log(replaceAllDigit('Hell11o@world'));

// 11. random hexadecimal number
const randomHexad = () => `#${Array.from({length:6}).map(x=>Math.floor((Math.random()*16)).toString(16).toUpperCase()).join('')}` 
console.log(randomHexad())