console.log("Start");

function sum(firstNumber, secondNumber) {
  if (firstNumber === secondNumber) return (firstNumber + secondNumber) * 3;
  return firstNumber + secondNumber;
}
console.log("1: ", sum(3, 2));

function checkType(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (a === 50 || b === 50 || a + b === 50) return true;
    return "they are integers but nothing is equal to 50";
  } else {
    return "No integers";
  }
}

console.log("2:", checkType(4, 5));

// Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string.
function deleteChar(string, position) {
  return string.slice(0, position) + string.slice(position + 1);
}
console.log("3: ", deleteChar("SOMETHING", 5));

// Create a function to find and return the largest of three given integers.
function largestInt(a, b, c) {
  return Math.max(a, b, c);
}
console.log("4: ", largestInt(1, 20, 3));
// Create a function to check if two numbers are in the range 40-60 or 70-100. Return true if they do, return false if one (or both) don't.
function areInRange(a, b) {
  if (
    a > 40 ||
    (a > 70 && b > 40) ||
    (b > 70 && a < 60) ||
    (a < 100 && b > 40) ||
    (b > 70 && b < 100)
  )
    return true;
  else return false;
}
console.log("5: ", areInRange(45, 45));

// Create a function to create a new string composed of a specified number of copies of a given string.
//  Pass the string and the number of copies as parameters.
function composeString(string, numberOfCopies) {
  let newString = "";
  for (i = 0; i < numberOfCopies; i++) {
    newString += " " + (i + 1) + " " + string;
  }
  return newString;
}
console.log("6. ", composeString("Hello", 2));
// Create a function to display the city name if the string begins with "Los" or "New".
//  Pass the city name as a parameter. Return false if they start with a different string.
function displayCityName(string) {
  if (string.startsWith("Los")) {
    return string;
  } else if (string.startsWith("New")) {
    return string;
  }
  return false;
}
console.log("7. ", displayCityName("Los Angeles"));

// Create a function to calculate and return the sum of all elements from an array with 3 elements. Pass the array as a parameter.
function sumOfArray(array) {
  sum = 0;
  for (i of array) {
    sum += i;
  }
  return sum;
}
console.log("8. ", sumOfArray([1, 2, 20]));

// Create a function to test if an array of length 2 contains 1 OR 3. Return true is it does, false if it doesn't.
function containsOneOrTwo(array) {
  if (array.length === 2) {
    for (i = 0; i <= 2; i++) {
      if (array[i] === 1 || array[i] === 3) return true;
      else return false;
    }
  } else return "The array is too long";
}
console.log("9. ", containsOneOrTwo([2, 3]));

// Create a function to find the longest string from a given array of strings. Pass the array as parameter and return the longest string.
function longestString(array) {
  let longestString = "a";
  for (i of array) {
    if (i.length > longestString.length) {
      longestString = i;
    }
  }
  return longestString;
}
console.log("11. ", longestString(["javascript", "react", "Redux", "Python"]));

// Create a function to find the types of a given angle:
// Acute angle ??? between 0 and 90 degrees. Return acute.

// Right angle ??? 90 degree. Return right

// Obtuse angle ??? between 90 and 180. Return obtuse

// Straight angle ??? 180 degrees. Return straight
function whatAngleType(angle) {
  if (angle === 0) return "This is an Zero angle";
  if (angle > 0 && angle < 90) return "This is an Acute angle";
  else if (angle === 90) return "This is a Right angle";
  else if (angle > 90 && angle < 180) return "This is an Obtuse angle";
  else if (angle === 180) return "This is an Straight angle";
  else if (angle > 180 && angle < 360) return "This is an Reflex angle";
  else if (angle === 360) return "This is an Complete angle";
  else return "Something is wrong!";
}
console.log("12. ", whatAngleType(90));

// Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter
function findIndexOfGreatest(array) {
  let largest = 0;
  for (i of array) {
    if (largest < i) largest = i;
  }
  return array.indexOf(largest);
}
console.log("13. ", findIndexOfGreatest([3, 4, 5, 34, 1]));
// Create a function to find and return the largest even number from an array of integers that is passed a parameter.
function largestEvenNumber(array) {
  let largest = 0;
  for (i of array) {
    if (i % 2 === 0 && i > largest) {
      largest = i;
    }
  }
  return largest;
}
console.log("14. ", largestEvenNumber([3, 4, 5, 6, 8, 9, 20, 55, 80]));

// Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative.
//  Return true if that's the case, return false if it's not.
function areNegativeAndPositive(a, b) {
  return (a < 0 && b > 0) || (a > 0 && b < 0);
}

console.log("15. ", areNegativeAndPositive(1, -1));
// Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case.
//  If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter.
function convertString(string) {
  let theString = "";
  if (string.length <= 3) return string.toUpperCase();
  for (i of string) {
    if (string.length > 3 && string.indexOf(i) < 3) {
      theString += i.toLowerCase();
    } else theString += i.toUpperCase();
  }
  return theString;
}
console.log("16. ", convertString("abcdef"));
// Create a function to calculate the sum of two integers (passed as parameters).
//  If the sum is in the 50-80 range, return 65, otherwise, return 80.
function sumIntegers(a, b) {
  return a + b > 50 && a + b < 80 ? 65 : 80;
}
console.log("17. ", sumIntegers(1, 50));
// Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example:
// The number has 3 as a factor ??? return Diego
// The number has 5 as a factor ??? return Riccardo
// The number has 7 as a factor ??? return Stefano
// If the number does not have 3,5, or 7, return the original number.
// ?????? The factor is an integer which evenly divides a number without leaving a remainder.
// One number can have more than one factor, in that case you should return both names.
// Ex: 15 has both 3 and 5 has factors: the function will return DiegoRiccardo
function checkFactors(a) {
  let result = "";
  if (a % 3 === 0) {
    result += "Diego";
  }
  if (a % 5 === 0) {
    result += "Riccardo";
  }
  if (a % 7 === 0) {
    result += "Stefano";
  }
  return result;
}
console.log("18. ", checkFactors(14));

// Create a function that that takes a phrase as a parameter and returns its acronym. Ex. British Broadcasting Corporation returns BBC
function getAcronym(phrase) {
  let result = phrase[0];
  for (i = 0; i < phrase.length; i++) {
    if (phrase[i] === " ") {
      result += phrase[i + 1];
    }
  }
  return result.toUpperCase();
}

console.log("19. ", getAcronym("British Broadcasting Corporation"));
