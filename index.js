console.log('isAdult(18) = ', isAdult(18));
console.log('isAdult(15) = ', isAdult(15));
console.log('isAdult(-23) = ', isAdult(-23));


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