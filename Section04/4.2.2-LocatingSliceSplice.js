const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("c");

// find the last index of "a", "b", and "c"
let lastA = arr.lastOf("a");
let lastB = arr.lastOf("b");
let lastC = arr.lastOf("c");

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

function removeDuplicates(array, duplicatedValue) {
    let firstIndex = array.indexOf(duplicatedValue);
    let lastIndex = array.lastIndexOf (duplicatedValue);
    while (firstIndex !== lastIndex) {
        array.splice(lastIndex, 1);
        lastIndex = array.lastIndexOf(duplicatedValue);
    }
    return array;
}