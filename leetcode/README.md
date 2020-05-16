# Lesson Learned

These are lesson learned when I used Javascript to solve LeetCode problems Starting from **May 1st**. The number indicate the date.

## Table of Content

1. [isBadVersion](#isBadVersion)
2. [jewelsAndStones](#jewelsAndStones)
3. [ransomNote](#ransomNote)
4. [findComplement](#findComplement)
5. [firstUniqueChar](#firstUniqueChar)
6. [majorityElement](#majorityElement)
7. [isCounsins](#isCousins)
8. [isLinear](#isLinear)
9. [isPerfectSquare](#isPerfectSquare)
10. [findJudge](#findJudge)
11. [floodFill](#floodFill)
12. [singleElement](#singleElement)
13. [removedKDigit](#removedKDigit)
14. [TrieNode](#TrieNode)

## [isBadVersion](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/1.isBadVersion.js)

1. Think simply, sometimes use while instead of for loop

2. Binary search if you know the answer should be in the other half.

## [jewelsAndStones](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/2.jewelsAndStones.js)

1. If you want to loop through a String, use split("") to convert into array of characters

2. Use **map, reduce, filter**

- **filter**: Remove items which don’t satisfy a condition

  - Ex: Selecting candidates who passed the test

- **map**: Executes a function on each element of an array

  - Ex: Conducting a test for multiple candidates

- **reduce**: Creates a single value from elements of Array
  - Ex: Creating a team from the selected candidates

## [ransomNote](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/3.ransomNote.js)

1. Using for...of or regular for loop instead of map, forEach, etc. for async

2. Always spend another 15' to learn from other solutions, and try those to learn about time and space.

3. avoid create new array, sets for better memory usage.

## [findComplement](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/4.findComplement.js)

1. Learn to use [bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

2. Learn flags and bitmasks
   - Binary flags take much less memory (by a factor of 32).
   - A bitmask is a sequence of bits that can manipulate and/or read flags

## [firstUniqueChar](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/5.firstUniqueChar.js)

1. Learn String's Index

2. `s.lastIndexOf(char) === s.indexOf(char)` will let me if know if that char is duplicate or not

## [majorityElement](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/6.majorityElement.js)

N/A

## [isCousins](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/7.isCousins.js)

1. Learn to apply recursion to traverse a Binary Search Tree

2. Finding depth of a node

## [isLinear](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/8.isLinear.js)

1. Review Cross Product

## [isPerfectSquare](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/9.isLinear.js)

1. N/A

## [isPerfectSquare](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/010.findJudge.js)

1. Learn to use Lodash's function (countBy);

2. How to work with Object

3. Using `map`, `reduce`, `filter` is quick, but the run-time may be bad and it's easy to get in async problem.

## [FloodFill](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/011.floodFill.js)

1. Apply DFS using recursion on one node.

2. Use global variable `this`

3. Learn edge cases to work with 2D Array using recursion

## [SingleElement](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/012.singleElement.js)

1. Learn how to use `reduce`

2. Learn to use XOR

3. Use binary search Runtime: O(log n)

## [RemovedKDigit](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/013.removedKDigit.js)

1. Learn to remove any leading 0 using regex

## [TrieNode](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/014.trie.js)

1. Learn to build the whole data structure in Javascript

2. Learn about TrieNode

## [maxSubArraySumCircular](https://github.com/calvinqc/allCodingChallenge/tree/master/leetcode/may_challenge/015.maxSubArraySumCircular.js)

1. Learn Dynamic Programming

2. Learn Kandane's Algorithm
