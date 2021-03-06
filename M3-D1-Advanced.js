/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
function maxChar(string) {
  let count = {};
  let valuesArray = [];
  let largest = 0;
  for (i of string) {
    if (count[i]) {
      count[i] += 1;
    } else {
      count[i] = 1;
    }
  }
  for (i of Object.values(count)) {
    valuesArray.push(i);
    if (largest < i) {
      largest = i;
    }
  }
  let max = Object.keys(count)[valuesArray.indexOf(largest)];

  return max;
}
console.log("1.", maxChar("Stefaneeaaa Ionut"));

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
function anagramOne(a, b) {
  result = "";
  for (i of a) {
    if (b.includes(i)) {
      result += i;
    } else return false;
  }
  return result;
}
console.log("2.", anagramOne("rail safety", "fairy tales"));

/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/
function anagramTwo(word, list) {
  anagrams = [];
  list.forEach((element) => {
    if (anagramOne(word, element)) {
      anagrams.push(element);
    }
  });
  return anagrams;
}
console.log("3.", anagramTwo("listen", ["enlists", "inlets", "banana"]));

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */
function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}
console.log("4.", isPalindrome("abba"));
/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */
let revInt = (int) => {
  result = JSON.stringify(int).split("").reverse().join("");
  if (int < 0) {
    return "-" + result.slice(0, -1);
  }
  return result;
};
console.log("5. ", revInt(20));

/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */
const steps = (n) => {
  for (let i = 0; i < n; i++) {
    let step = " ";

    for (let j = 0; j < n; j++) {
      if (j <= i) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
  return "done";
};
console.log("6. ", steps(3));

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */
const revString = (string) => string.split("").reverse().join("");

console.log("7.", revString("hei!"));
/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/
const chunks = (array, c) => {
  count = Math.ceil(array.length / c);
  index = c;
  result = [];
  for (i = 0; i < count; i++) {
    result.push(array[(i, index)]);
    index += count;
  }
  return result;
};
console.log("8.", chunks([1, "hey", 3, 4, 5, 6, 7, 8, 9], 3));
/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
