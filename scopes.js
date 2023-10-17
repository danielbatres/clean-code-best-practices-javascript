// Global scope

let greeting = 'Hello world!'

function greet() {
  console.log(greeting)
}

greet() //> Hello world!

// Local scope

function localGreet() {
  let localGreeting = 'Hello'

  console.log(localGreeting)
}

localGreet()

// console.log(localGreeting) //> error

// Block scope

{
  let blockGreeting = 'Hello block'
  var lang = 'English'

  console.log(blockGreeting)
}

console.log(lang) //> English
// console.log(blockGreeting) //> error

// Static scope

const age = 28

function printAge() {
  console.log(age)
}

function mainApp() {
  const age = 26
  printAge()
}

mainApp() //> 28

// Values ​​are determined at compile time and not execution time