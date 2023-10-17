// It's like uploading the declaration to the beginning of its scope

greet(); //> Hello world

function greet() {
  let greeting = 'Hello world'

  console.log(greeting)
}

// Hoisting applies to the declaration of the variable but not to the assignment

var shortGreet = 'Hello';

(
  function() {
    console.log(shortGreet) //> undefined

    var shortGreet = 'Hi'

    console.log(shortGreet) //> Hi
  }
)()