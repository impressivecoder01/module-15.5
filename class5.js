//all about basic array methods, isArray
const friends = ['balam', 'kalam', 'salam', 'gelam']
// const friend = ['balam', 'kalam', 'salam', 'gelam']
console.log(friends.includes('balam'));
const finding = friends.includes('kalam');
console.log(finding)
if(friends.includes('blam')){
    console.log('give me the name')
}
else{
    console.log('not here')
}

console.log(friends.indexOf('balam'))

const nums = [];
const food = 'robin hud';
console.log(Array.isArray(friends))
console.log(Array.isArray(nums))
console.log(Array.isArray(food))
// const find = Array.isArray(friend)
// console.log(find, 'finding')