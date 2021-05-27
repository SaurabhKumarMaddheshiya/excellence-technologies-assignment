import React, { useState, useEffect} from 'react'
import $, {dataString} from "jquery";


const myStyle4 = {
	textAlign : "center"
}

const Question4 = () => {
	const [results, setResults] = useState([])
	useEffect(() => {
		$.ajax({
			type: "GET",
			url: "https://my-json-server.typicode.com/typicode/demo/posts",
			cache: false,
			data: dataString,
			success: function(results){
			setResults(results);
			console.log(results)

			},
		})
	}, [])
	return (
		<div style={myStyle4}>
			<h2>Question 4</h2>
			{results.map((result, key) => (
				<div key={key}>
				<span>{result.id} </span><span>{result.title}</span>
				</div>
			))}
			
		</div>
	)
}

export default Question4
