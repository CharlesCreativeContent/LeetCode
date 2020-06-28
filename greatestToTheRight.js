/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
*/

//Answer//

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    return arr.map((x,i)=>i===(arr.length-1)?-1:Math.max(...arr.slice(i+1)))
};
