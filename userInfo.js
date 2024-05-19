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

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example
const names = ["Alice", "Bob", "Charlie", "Diana"];
const numbers = [1, 2, 3, 4];

const modifiedNames = formatArrayStrings(names, numbers);
const userProfiles = createUserProfiles(names, modifiedNames);

console.log(userProfiles);

