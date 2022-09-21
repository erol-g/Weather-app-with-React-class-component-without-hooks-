import React from "react";
import "./SearchBar.css";

function SearchBar({ search, searchText }) {
	return (
		<>
			<header>
				<input
					type="text"
					className="search-box"
					placeholder={searchText}
					onKeyPress={search}
				/>
			</header>
		</>
	);
}

export default SearchBar;
