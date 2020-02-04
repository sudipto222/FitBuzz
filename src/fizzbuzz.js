module.exports = {
  check_number: check_number
}
// declared a function check_number
function check_number(number) {
// if remainder of number when divided by 3 and 5 is 0, console.log fizzbuzz
  if (0 === number % 3 && 0 === number % 5) {
    return 'FizzBuzz'
  }
// if remainder of number when divided by 3 is 0, console.log fizz
  if (0 === number % 3 ) {
    return 'Fizz'
  }
// if remainder of number when divided by  5 is 0, console.log buzz
  if (0 === number % 5) {
    return 'Buzz'
  }
  return number
}
// loop through all the numbers from 0 to 100
for(let i=1; i<=100; i++){
  console.log(check_number(i))
}



  

