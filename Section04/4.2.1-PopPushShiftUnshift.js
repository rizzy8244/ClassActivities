const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let removeNum1 = nums.pop();

let removeNum2 = nums.pop();

// remove each of the first two items with shift(), saving each item to a variable
let shiftNum1 = nums.shift();

let shiftNum2 = nums.shift();
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(removeNum2);
nums.unshift(removeNum1);
nums.pop(shiftNum2);
nums.push(4);
nums.push(shiftNum1);

console.log(nums);
