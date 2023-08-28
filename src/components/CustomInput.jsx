import React from "react";
import "../styles/CustomInput.css";

export default function CustomInput({ For }) {
	return (
		<div className="CustomInput">
			<input
				type="text"
				placeholder=""
				required
				id={`inputFor${For?.toUpperCase()}`}
			/>
			<label htmlFor={`inputFor${For?.toUpperCase()}`}>{For}</label>
		</div>
	);
}
