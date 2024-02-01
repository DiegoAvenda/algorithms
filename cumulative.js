//create a function that takes an array of numbers and returns a number that is the sum of all values in the array.

const numbers = [3, 7, 9, 5, 2]

function suma(...rest) {
  return rest.reduce(
    (accumulator, currentValue) => (accumulator += currentValue),
    0
  )
}

function sumas(...rest) {
  total = 0

  for (let i = 0; i < rest.length; i++) {
    total += rest[i]
  }
  return total
}

console.log('reduce: ' + suma(...numbers))
console.log('for loop: ' + sumas(...numbers))
