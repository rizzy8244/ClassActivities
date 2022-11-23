const arr = [
    "dog",
    'cat',
    true,
    false,
    ["This is an array inside of an array", 5, true],
    {object:"I am a value to a key"},
    "just kidding, im last"
];

console.log("This is the second iteration", arr[1]);
console.log("This is the fourth iteration", arr[3]);
console.log(arr[10]);
console.log(arr.length);
console.log(arr[0].length);
console.log(arr[4].length);
console.log(arr[4][2].length);

for (let item of arr) {
    console.log(item);
}

let lastItem = arr.length - 1;

console.log("this is the last item: ", arr[lastItem]);

const books = {
    title: "The Last Iteration",
    author: "Unknown",
    year: 2022,
    genre: ["comedy", "drama", "romance",],
    award: {
        awardName: "Amazing Book Stuff",
        nominated: 2020,
        won: 2022,
        worthless: true
    },
    promote: function() {
        return `${this.title} is a book written by ${this.author} in ${this.year}. It has won an award called ${this.award.awardName} in ${this .award.won} and it is ${this.award.worthless} that is worthless`;

    }
}

console.log(books.promote());
console.log(books.genre[1]);