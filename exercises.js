/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 * 
 */
 var stringCount = str => {
   return str.length;
 }

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = arr => {
  return arr.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = (array) => {
  return array.reduce((accum, constant) => {
    return accum + constant
  }, 0);
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = (arr) => {
  return arr.map((sL) => {
    return sL.length;
  });
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = (arr) => {
  return arr.reduce((accum, constant) => {
    return accum + constant.length;
  }, 0);
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = (arr) => {
  return arr.split("");
}


/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = (arr) => {
  return arr[arr.length - 1].length;
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = (arr) => {
 return arr.reduce((accum, constant) => {
  if(constant < 10){
    return accum + constant;
  } else {
    return accum 
  }
 }, 0)
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = (arr) => {
  return arr.reduce ((accum, constant) => {
    if(constant.length > 10) {
      return accum + 1;
    }else{
      return accum;
    }
  }, 0)
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = (arr) => {
  return arr.reduce((accum, constant) => {
    return accum * constant;
  }, 1)
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = (arr) => {
  return arr.reduce((accum, constant) => {
    if(constant > 0){
     return accum + constant;
    }else{
      return accum;
    }
  }, 0)
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = (arr) => {
  return arr.reduce((accum, constant) => {
    if(constant.length <= 3){
      return accum + 1;
    }else {
      return accum;
    }
  }, 0)
}

/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = (arr) => {
  return arr.map((oof) => {
    return oof * 2;
  })
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}   
 */


var countObjects = (arr) => {
  return arr.reduce((accum, constant) => {
    if(typeof constant === 'object'){
      return accum + 1;
    }else{
      return accum;
    }
  }, 0)
}



module.exports = {
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  doubleArray: doubleArray,
  countObjects: countObjects
};
