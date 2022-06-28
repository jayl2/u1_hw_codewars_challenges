## Return Negative

function makeNegative(num) {

let numByTwo = num \* 2

if (num < 0) {
return num
} else {
return num - numByTwo
}
}

console.log(makeNegative(14))

## Sum of Positive

let sumOfPositive = (arr) => {
let posInt = []
for (let i = 0; i < arr.length; i++) {
if (arr[i] > 0) {
posInt.push(arr[i])
}
}
return posInt
}

console.log(sumOfPositive([2, 4, 1, 5, 3, -10]))

## Function 2

let sqRoot = function (num) {
let sq = Math.sqrt(num)
return sq
}

console.log(sqRoot(25))

## Sum Arrays

function sumArr(arr) {
let answer = []
let nums = 0

for (let i = 0; i < arr.length; i++) {
nums += arr[i]
}
answer.push(nums)
return answer
}

console.log(sumArr([8, 2, 4, 8, 7, -20]))

## Reversed Strings

function reverse(str) {
let wordArr = str.split('')
console.log(wordArr + ' string to array')

let revArr = wordArr.reverse()
console.log(revArr + ' reverse array')

let newARR = revArr.join('')
console.log(newARR + ' new string')

return newARR
}

console.log(reverse('hello'))

<!-- ----------------OR---------------- -->

function reverse(str) {
let revStr = ''

for (let i = str.length - 1; i >= 0; i--) {
revStr += str[i]
}

return revStr
}
console.log(reverse('night'))
