let numbers: readonly number[] = [10,20,30,40,50];

//numbers[0] = 30 - Como é readOnly não consigo modificar, apenas fazer a lietura
let numbersCopy = numbers.map(item => item * 2)
console.log(numbers)
console.log(numbersCopy)

export default () => {}