// Named Parameters
// write a function that takes two named parameters:
function myFunction(x, y, ...z) {
    console.log(x);
    console.log(y);
    return x + y;
}
// print each named parameter,
// then return the parameters added together

// invoke the function and pass in two numbers
//console.log(myFunction(1,3));
// invoke the function and pass in more than two numbers
//console.log(myFunction(1));
// invoke the function and pass in only one number

// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator

// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
console.log(myFunction(1, 2, 3, 4, 5, 6));