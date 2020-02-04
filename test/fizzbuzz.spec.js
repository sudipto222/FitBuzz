// require the chai test module
var expect = require('chai').expect
// 
var fizzbuzz = require('../src/fizzbuzz')

// describe the general test function
describe('The FizzBuzz Game:', () => {
  describe('the check_number function', () => {
// It should return fizz if it passed the number 3
    it('should return Fizz if passed 3', () => {
      var result = fizzbuzz.check_number(3)
      expect(result).to.equal('Fizz')
    })
      // It should return fizz if it passed the number 5
    it('should return Buzz if passed 5', () => {
      var result = fizzbuzz.check_number(5)
      expect(result).to.equal('Buzz')
    })
// It should return 1 if it passed the number 1 since 1 is not divisible by either 3 or 5 and its not a multiple of 3and 5
    it('should return 1 if passed 1 (not multiple of 3 nor 5)', () => {
      var result = fizzbuzz.check_number(1)
      expect(result).to.equal(1)
    })
// It should returm Fizz if passed 9 which is a muktiple of 3
    it('should return Fizz if passed 9 (multiple of 3)', () => {
      var result = fizzbuzz.check_number(9)
      expect(result).to.equal('Fizz')
    })
// It should return Buzz if passed 10 which is a multiple of 5
    it('should return Buzz if passed 10 (multiple of 5)', () => {
      var result = fizzbuzz.check_number(10)
      expect(result).to.equal('Buzz')
    })
// It should return fizzbuzz if passed 15 since 15 is a multipke of 3 and 5
    it('should return FizzBuzz if passed 15 (multiple of 3 & 5)', () => {
      var result = fizzbuzz.check_number(15)
      expect(result).to.equal('FizzBuzz')
    })
  // It should return fizzbuzz if passed 51 since 51 is also is a multipke of 3 and 5
    it('should return Fizz if passed 51 (multiple of 3 before having 5 in it)', () => {
      var result = fizzbuzz.check_number(51)
      expect(result).to.equal('Fizz')
    })




  })
})
