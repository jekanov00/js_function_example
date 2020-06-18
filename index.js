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

console.log('');

console.log('rhombusArea(12, 10) = ', rhombusArea(12, 10));
console.log('rhombusArea(-2, 4) = ', rhombusArea(-2, 4));

console.log('');

console.log('cylinderArea(3, 5) = ', cylinderArea(3, 5));
console.log('cylinderArea(-2, 4) = ', cylinderArea(-2, 4));

console.log('');

console.log('triangleArea(5, 4) = ', triangleArea(5, 4));
console.log('triangleArea(-2, 4) = ', triangleArea(-2, 4));

console.log('');

console.log('rectangleArea(5, 4) = ', rectangleArea(5, 4));
console.log('rectangleArea(-2, 4) = ', rectangleArea(-2, 4));


/**
 *
 * @param {number} age
 * @returns {null|boolean}
 */
function isAdult (age) {
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
function checkMultiplicity (number, multiplicity) {
  return number % multiplicity === 0;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */
function isExistingTriangle (a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

/**
 *
 * @param {number} side
 * @param {number} height
 * @returns {null|number}
 */
function rhombusArea (side, height) {
  if (side > 0 && height > 0) {
    return side * height;
  }
  return null;
}

/**
 *
 * @param {number} radius
 * @param {number} height
 * @returns {null|number}
 */
function cylinderArea (radius, height) {
  if (radius > 0 && height > 0) {
    return 2 * Math.PI * radius * height + 2 * Math.PI * radius * radius;
  }
  return null;
}

/**
 *
 * @param {number} base
 * @param {number} heightToBase
 * @returns {null|number}
 */
function triangleArea (base, heightToBase) {
  if (base > 0 && heightToBase > 0) {
    return (base * heightToBase) / 2;
  }
  return null;
}

/**
 *
 * @param {number} length
 * @param {number} width
 * @returns {null|number}
 */
function rectangleArea (length, width) {
  if (length > 0 && width > 0) {
    return length * width;
  }
  return null;
}