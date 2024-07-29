import Validator from './validator';

console.log(Validator.validateUsername('validUsername_123'));  // true
console.log(Validator.validateUsername('invalid__username__'));  // false