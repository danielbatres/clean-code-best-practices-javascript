// Arrays, plural variable name

// Not recommended
const user = ['Alex', 'John', 'Jessica']

// Regular
const userList = ["Alex", "John", "Jessica"]

// Good
const users = ["Alex", "John", "Jessica"]

// Excellent
const userNames = ["Alex", "John", "Jessica"]

// Booleans, recommended prefixes 'is', 'has' and 'can'

// Not recommended
const valid = true
const read = false
const color = true

// Recommended
const isValid = true
const canRead = false
const hasColor = true

// Numbers, recommended prefixes 'min', 'max' and 'total'

// Not recommended
const products = 15

// Recommended
const maxProducts = 50
const minProducts = 10
const totalProducts = 15

// Functions, start with a verb followed by a noun

// Not recommended
createUserIfNotExists()
updateUserIfNotEmpty()
sendEmailIfIsValid()

// Recommended
createUser()
updateUser()
sendEmail()

// access functions 

// examples
getUser()
setUser()
isValidUser()

// Classes, the use of nouns is recommended, avoid using generic names

// Not recommended
class Data {}
class Manager {}
class Info {}

// Recommended
class User {}
class UserProfile {}
class Account {}
