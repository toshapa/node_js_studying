const exportedObj = require('./multiple_exp-files')
const greetingsFn = require('./single_exp-files')
const {
    myName: myOtherName,
    myFriendName,
    myGreatTiming,
} = require('./imp_and_exp-files')

const { myName, myHobbies, myNumber } = exportedObj

console.log(myName, myNumber)
console.log(myHobbies)

myHobbies.push('Eating')

greetingsFn(myFriendName)
greetingsFn(myOtherName)

console.log(myGreatTiming)
