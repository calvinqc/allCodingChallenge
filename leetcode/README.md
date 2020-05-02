# Lesson Learned

These are lesson learned when I used Javascript to solve LeetCode problems Starting from **May 1st**. The number indicate the date.

## Table of Content

1. [isBadVersion](#1.-isBadVersion)
2. [jewelsAndStones.js](#2.-jewelsAndStones.js)

## 1. isBadVersion

1. Think simply, sometimes use while instead of for loop

2. Binary search if you know the answer should be in the other half.

## 2. jewelsAndStones.js

1. If you want to loop through a String, use split("") to convert into array of characters

2. Use **map, reduce, filter**

- **filter**: Remove items which don’t satisfy a condition

  - Ex: Selecting candidates who passed the test

- **map**: Executes a function on each element of an array

  - Ex: Conducting a test for multiple candidates

- **reduce**: Creates a single value from elements of Array
  - Ex: Creating a team from the selected candidates
