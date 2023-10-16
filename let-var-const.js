// Before ES6

var name = 'Alex'

// var defines variables in global scope

var age = 28

// block scope
{
  console.log('Value inside the block', age) //> 28

  var age = 29
}

console.log('Value outside the block', age) //> 29

age *= 2

console.log('Changed value', age) //> 58

// Modern JavaScript

let firstname = 'Daniel'

let newAge = 28

{
  // console.log(newAge) //> error
  let newAge = 29
}

newAge *= 2

console.log(newAge) //> 56

const PI = 3.14159 // does not change its value

console.log(PI) //> 3.14159