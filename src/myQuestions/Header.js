import React from 'react';
import { Link } from "react-router-dom";

const headingStyle = {
	margin: "10px",
	textDecoration: "none",
	color: "black",
	fontWeight: "bold"
}

const heading = {
	margin: "10px",
	padding: "10px",
	backgroundColor: "gray",
	textAlign: "center",
}

const Header = () => {
	return (
		<div style={heading}>
			<Link style={headingStyle} to="/Question-1">Question 1</Link>
			<Link style={headingStyle} to="/Question-2">Question 2</Link>
			<Link style={headingStyle} to="/Question-3">Question 3</Link>
			<Link style={headingStyle} to="/Question-4">Question 4</Link>
			<Link style={headingStyle} to="/Question-5">Question 5</Link>
		</div>
	)
}

export default Header
