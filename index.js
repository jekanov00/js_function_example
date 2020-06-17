console.log('isAdult(18) = ', isAdult(18));
console.log('isAdult(15) = ', isAdult(15));
console.log('isAdult(-23) = ', isAdult(-23));

console.log('');

console.log('checkMultiplicity(25, 5) = ', checkMultiplicity(25, 5));
console.log('checkMultiplicity(25, 2) = ', checkMultiplicity(25, 2));
console.log('checkMultiplicity(-15, -3) = ', checkMultiplicity(-15, -3));

console.log('');

console.log('isExistingTriangle(1, 2, 3) = ', isExistingTriangle(1, 2, 3));
console.log('isExistingTriangle(2, 4, 7) = ', isExistingTriangle(2, 4, 7));
console.log('isExistingTriangle(2, 2, 3) = ', isExistingTriangle(2, 2, 3));

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

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */
function isExistingTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}