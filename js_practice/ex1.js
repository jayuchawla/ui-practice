// 1. check if any of given 2 nums is 100 or their sum is 100
const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a+b) === 100;

// 2. get extension of a filename
const getFileExtension = (f) => f.slice(f.lastIndexOf(".") + 1)

// 3. character replace with one character ahead of it
const replaceCharacter = (s) => s.split('').map(char => String.fromCharCode((char.charCodeAt(0) - 97 + 1) % 26 + 97 )).join('');

// 4. print current date in mm-dd-yyyy format
const currentDate = (date = new Date()) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}-${day}-${year}`
}

// 5. prepend NEW! if str does not begin with it
const prependStr = (s) => s.startsWith("NEW!") ? s : ("NEW!" + s)

console.log(isEqualTo100(100,9));
console.log(isEqualTo100(9,100));
console.log(isEqualTo100(50,50));

console.log(getFileExtension("hello.world"))

console.log(replaceCharacter('hello'));

console.log(currentDate())

console.log(prependStr("Hello"))
console.log(prependStr("NEW!Hello"))