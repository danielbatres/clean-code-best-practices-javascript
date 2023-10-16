// Not recommended
const yyyymmdstr = moment().format('YYYY/MM/DD')

// Recommended
const currentDate = moment().format('YYYY/MM/DD')

// Not recommended
let arrayNames = ['Alex', 'John', 'Cande']

// Recommended
let namesList = ['Alex', 'John', 'Cande']

// Not recommended
getUserInfo()
getClientData()
getCustomerRecord()

// many things represent the same concept

// Recommended
getUser()