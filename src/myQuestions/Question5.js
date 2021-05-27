import React from 'react'

const myStyle5 = {
	textAlign : "center"
}
const Question5 = () => {
        var obj = [
            {
            "id": 4, "name": "abc"
            },
            {
                "id": 10, "name": "ab2"
            },
            {
                "id": 6, "name": "abc5"
            },
            {
                "id": 5, "name": "abc3"
            },
        ];

      var sortedObjs =   obj.sort(function (a, b) {
            return a.id - b.id;
        })
        console.log(sortedObjs);
		var myString = JSON.stringify(sortedObjs)
        
	return (
		<div style={myStyle5}>
			<h2>Question 5</h2>
			{myString}
		</div>
	)
}

export default Question5
