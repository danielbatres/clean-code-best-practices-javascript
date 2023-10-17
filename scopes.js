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