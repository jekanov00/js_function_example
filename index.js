console.log('isAdult(18) = ', isAdult(18));
console.log('isAdult(15) = ', isAdult(15));
console.log('isAdult(-23) = ', isAdult(-23));

console.log('');

console.log('checkMultiplicity(25, 5) = ', checkMultiplicity(25, 5));
console.log('checkMultiplicity(25, 2) = ', checkMultiplicity(25, 2));
console.log('checkMultiplicity(-15, -3) = ', checkMultiplicity(-15, -3));

/**
 *
 * @param {number} age
 * @returns {null|boolean}
 */
function isAdult(age) {
  if (age >= 0) {
    return age >= 18;
  }
  return null;
}

/**
 *
 * @param {number} number
 * @param {number} multiplicity
 * @returns {boolean}
 */
function checkMultiplicity(number, multiplicity) {
  return number % multiplicity === 0;
}