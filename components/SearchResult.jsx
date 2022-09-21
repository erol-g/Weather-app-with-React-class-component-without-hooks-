import React from "react";
import "./SearchResult.css";

function SearchResult({ city, date, temperature, err }) {
	return (
		<div>
			<main id="main">
				<div id="error">{err}</div>
				<div className="location">
					<div className="city">{city}</div>
					<div className="date">{date}</div>
				</div>
				<div className="result">
					<div className="temperature">{temperature}</div>
				</div>
			</main>
		</div>
	);
}

export default SearchResult;
