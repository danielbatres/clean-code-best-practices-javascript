// lambda expression

const getResult = () => 'Results'

console.log(getResult())

// without arrow
[1, 2, 3].map(function (n) {
  return n * 2
})

// with arrow
[1, 2, 3].map(n => n * 2)

const counter = {
  number: 0,
  increase() {
    setInterval(() => console.log(++this.number), 1000)
  }
}

counter.increase()