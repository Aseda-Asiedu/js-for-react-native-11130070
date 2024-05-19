//ProcessArray function
function processArray(arr) {
    return arr.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
}

function formatStringBasedOnNumber(str, num) {
    return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
}

function formatArrayStrings(strings, numbers) {
    const processedNumbers = processArray(numbers);
    return strings.map((str, index) => formatStringBasedOnNumber(str, processedNumbers[index]));
}

const strings = ["hello", "world", "test", "example"];
const numbers = [1, 2, 3, 4];
const formattedStrings = formatArrayStrings(strings, numbers);

console.log(formattedStrings); 
