# Lesson Learned

These are lesson learned when I used Javascript to solve LeetCode problems Starting from **May 1st**. The number indicate the date.

## Table of Content

1. [isBadVersion](#1.isBadVersion.js)
2. [jewelsAndStones.js](#2.jewelsAndStones.js)
3. [ransomNote](#3.ransomNote.js)
4. [findComplement.js](#4.findComplement.js)
5. [firstUniqueChar](#5.firstUniqueChar.js)
6. [majorityElement](#6.majorityElement.js)
7. [isCounsins](#7.isCousins.js)
8. [isLinear](#7.isLinear.js)

## [1.isBadVersion.js](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/1.isBadVersion.js)

1. Think simply, sometimes use while instead of for loop

2. Binary search if you know the answer should be in the other half.

## [2.jewelsAndStones.js](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/2.jewelsAndStones.js)

1. If you want to loop through a String, use split("") to convert into array of characters

2. Use **map, reduce, filter**

- **filter**: Remove items which don’t satisfy a condition

  - Ex: Selecting candidates who passed the test

- **map**: Executes a function on each element of an array

  - Ex: Conducting a test for multiple candidates

- **reduce**: Creates a single value from elements of Array
  - Ex: Creating a team from the selected candidates

## [3.ransomNote.js](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/3.ransomNote.js)

1. Using for...of or regular for loop instead of map, forEach, etc. for async

2. Always spend another 15' to learn from other solutions, and try those to learn about time and space.

3. avoid create new array, sets for better memory usage.

## [4.findComplement.js](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/4.findComplement.js)

1. Learn to use [bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

2. Learn flags and bitmasks
   - Binary flags take much less memory (by a factor of 32).
   - A bitmask is a sequence of bits that can manipulate and/or read flags

## [5.firstUniqueChar.js](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/5.firstUniqueChar.js)

1. Learn String's Index

2. `s.lastIndexOf(char) === s.indexOf(char)` will let me if know if that char is duplicate or not

## [6.majorityElement.js](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/6.majorityElement.js)

N/A

## [7.isCousins.js](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/7.isCousins.js)

1. Learn to apply recursion to traverse a Binary Search Tree

2. Finding depth of a node

## [7.isLinear.js](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/7.isLinear.js)

1. Review Cross Product
