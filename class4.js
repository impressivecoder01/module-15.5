// add/remove elements from arrays using push, pop shift and unshift
//--------push
let ages = [];
ages = [33];
console.log(ages)
const numbers = [33,32,24,565,54,35,67];
numbers.push(333)
console.log(numbers)
//----------pop
const friends = ['balam', 'kalam', 'salam', 'gelam']
friends.pop();
console.log(friends)
const out2 = friends.pop();
console.log(out2)

//-----------
const friend = ['balam', 'kalam', 'salam', 'gelam'];
friend.shift();
console.log(friend);
friend.unshift('bd.com')
console.log(friend)
friend.unshift('bd.com', 'bd')
console.log(friend)