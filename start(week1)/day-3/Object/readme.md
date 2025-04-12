```
const user={
    name:'john',
    accessPremiumFeatures:true
}
const user2={
    name:'jane'

}
console.log(user.hasOwnProperty('accessPremiumFeatures'))
console.log(Object.hasOwn(user2,'accessPremiumFeatures'))
console.log(Object.hasOwn(user,'accessPremiumFeatures'))

const person=Object.create(null)
person.username="James"
// console.log(person.hasOwnProperty('username'))
console.log(Object.hasOwn(person,'username'))

```
