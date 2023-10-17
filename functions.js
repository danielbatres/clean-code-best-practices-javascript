// Function declaration

function getResult() {
  return 'Results'
}

getResult() //> return Results

// Function expression

const getResults = function () {
  return 'Results'
}

getResults()

// Parameters and arguments

function getDouble(number) { // parameter number
  return number * 2
}

// argument 10
getDouble(10) //> 20

// It is recommended not to exceed 3 arguments per function

// default parameter
function greet(person = 'strange') {
  console.log(`Hello ${person}`)
}

greet() //> Hello strange
greet('Daniel') //> Hello Daniel

function undefinedGreet(person) {
  console.log(`Hello ${person}`)
}

undefinedGreet() //> ???

// Spread operator, unify arguments

// without rest
function add(x, y) {
  console.log(x + y)
}

add(1, 2, 3, 4, 5) //> 3

// with rest
function restAdd(...args) {
  console.log(args.reduce((prev, current) => prev + current, 0))
}

restAdd(1, 2, 3, 4, 5) //> 15

const course = {
  title: 'Definitive JavaScript',
  content: 'All you neet to know'
}

const courseCloned = Object.assign({}, course)

const spredCourseCloned = { ...course }

console.log(spredCourseCloned)

const numbers = [1, 2, 3]

const clonedNumbers = numbers.slice()
const spreadClonedNumbers = [...numbers]

console.log(spreadClonedNumbers)

const numbersA = [1, 2, 3]
const numbersB = [4, 5, 6]

const newNumbers = [...numbersA, ...numbersB]

console.log(newNumbers)