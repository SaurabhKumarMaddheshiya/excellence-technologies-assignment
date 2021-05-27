import React from 'react'

const myStyle1 = {
	textAlign : "center"
}
const Question1 = () => {
	var evenNums = [];
	function getEvenNumbers() {
        var arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 15, 17, 18, 99, 100];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                console.log(arr[i]);
				var evenNum = arr[i];
				evenNums.push(evenNum + ", ");
            }
        }
    }

    getEvenNumbers();
	return (
		<div style={myStyle1}>
			<h2>Question 1</h2> 
			<p><b>Even Numbers: </b>{evenNums}</p>
		</div>
	)
}

export default Question1
