import React from 'react'

const myStyle2 = {
	textAlign : "center"
}
const Question2 = () => {
const arr1 = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
const arr2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 1]
const findMaxConsecutiveOnes = (arr = []) => {
   let left = 0;
   let right = 0;
   let max = 0;
   while (right < arr.length) {
      if (arr[right] === 0) {
        if (right - left > max) {
            max = right - left
         };
         right++;
         left = right;
      } 
	  else {
         right++
      };
   };
   return right - left > max ? right - left : max;
}
const res1 = findMaxConsecutiveOnes(arr1);
const res2 = findMaxConsecutiveOnes(arr2);
console.log(findMaxConsecutiveOnes(arr1));
console.log(findMaxConsecutiveOnes(arr2));
	return (
		<div style ={myStyle2}>
			<h2>Question 2</h2>
			<p><b>a) Result: </b>{res1}</p>
			<p><b>b) Result: </b>{res2}</p>
		</div>
	)
}

export default Question2
