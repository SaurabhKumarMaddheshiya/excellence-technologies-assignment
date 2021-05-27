import React from 'react'

const myStyle3 = {
	textAlign : "center"
}
const Question3 = () => {
	function findDupArr(given_array) {
        var object = {};
        var result = [];

        given_array.forEach(function (item) {
          if(!object[item])
              object[item] = 0;
            object[item] += 1;
        })

        for (var prop in object) {
           if(object[prop] >= 2) {
               result.push(prop);
           }
        }

        return result;

    }
	var arr = [0,1,2,3,4,5,6,7,7,8,9,10]
	var duplicat_arr = JSON.stringify(findDupArr(arr));
    console.log(findDupArr(arr));
	return (
		<div style ={myStyle3}>
			<h2>Question 3</h2>
			{duplicat_arr}
		</div>
	)
}

export default Question3
