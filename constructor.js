// Before ES6

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return 'Hello I am ' + this.name;
}

var person = new Person('Alex')
console.log(person.name)
console.log(person.greet())

// inherit class

function Developer(name) {
  this.name = name;
}

Developer.prototype = Object.create(Person.prototype)
Developer.prototype.writeCode = function (coffee) {
  if (coffee) console.log('I am working in a new feature');
  else console.log('I need coffee, please!');
}

var developer = new Developer('Alex')
developer.greet()
developer.writeCode() 

// With ES6

/* 
  class Developer extends Person {
    constructor(name) {
      super(name)
    }

    writeCode(params) {
      ...code
    }
  }
*/

class Cat {
  constructor(cat) {
    this.name = cat
  }

  greet() {
    return 'Hello I am a cat and my name is ' + this.name;
  }
}

const cat = new Cat('Oliver')
console.log(cat.name)
console.log(cat.greet())