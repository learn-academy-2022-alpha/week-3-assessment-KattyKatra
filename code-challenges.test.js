// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

//Create a function called fibSeq
//Take in number greater than 2 as parameter
//Returns array that length that contains numbers of fibonacci sequence

// a) Create a test with expect statements for each of the variables provided.

describe("fibSeq", (num) => {
  it("returns an array numbers the same length as input", () => {
    expect(fibSeq(6)).toEqual([1,1,2,3,5,8])
    expect(fibSeq(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.

var fib = []
var i

fib[0] = 0
fib[1] = 1
const fibSeq = (num) => {
  for (var i = 2; i < num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
    fib.push(fibSeq)
  }
  return fib
}

//I'm slowly getting the hang of testing, but recieving an error for undefined

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

//Create function named greatestOdds with array parameter
//Takes in array and filters odd numbers
//Numbers are rearranged from lowest to greatest
//Outputs new array

describe("greatestOdds", (array) => {
  it("returns a new array of only odd numbers sorted from lowest to greatest", () => {
    expect(greatestOdds(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(greatestOdds(fullArr2)).toEqual([-823, 7, 23])
  })
})

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

const greatestOdds = (array) => {
  return oddArray = array.filter(value => value %2 !== 0)
  return oddArray.sort(function(a, b){return b - a})
}

// I'm having a bit of issues with this one. I think it's mainly the filter that isn't right since it returns false as part of the array.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

//Make function named addSum
//Input array of numbers
//Adds to each value the cumulative value of previous values
//Export as new array

describe("addSum", () => {
  it("returns an array of accumulating sum", () => {
    expect(addSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(addSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(addSum(numbersToAdd3)).toEqual([])
  })
})

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

function addSum(array) {
    var result = [array[0]]
    var last = array[0]
    for (i = 1; i < array.length; i++) {
        last = last + array[i]
        result.push(last)
    } if (array === undefined) {
      return []
    }
    return result
}

// - Expected  - 1
    // + Received  + 3
    //
    // - Array []
    // + Array [
    // +   undefined,
    // + ]
    //What? No issues outside this and no clue why it's catchinmg like that
