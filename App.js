import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.jsx";
import SearchResult from "./components/SearchResult.jsx";
import { GetWeather } from "./helpers/weatherApi.js";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			city: "I love Manchester",
			date: "",
			temp: "",
			err: "",
			searchText: "Type a city name please..",
		};

		this.handleSearch = this.handleSearch.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleSearch(event) {
		if (event.key === "Enter") {
			let result = GetWeather(event.target.value).then((response) => {
				if (response.cod === 200) {
					this.setState({
						city: `${response.name}, ${response.sys.country}`,
						date: `${new Date().toLocaleTimeString()}`,
						temp: `${Math.round(response.main.temp)} ºC`,
						err: " ",
					});
					document.body.querySelector("input").value = "";
				} else {
					this.setState({
						city: "City name did not found ! ! !",
						date: "",
						temp: "",
						err: " Please try again with correct city name! ",
					});
					document.body.querySelector("input").value = "";
				}
			});
			console.log(result);
		}
	}

	handleClick() {
		console.log("it works");
		this.setState({
			city: "I love Manchester",
			date: "",
			temp: "",
			err: "",
		});
		document.body.querySelector("input").value = "";
	}

	render() {
		return (
			<div className="app-wrap">
				<SearchBar
					search={this.handleSearch}
					searchText={this.state.searchText}
				/>
				<SearchResult
					city={this.state.city}
					date={this.state.date}
					temperature={this.state.temp}
					err={this.state.err}
				/>
				<button onClick={this.handleClick} style={{ margin: "auto" }}>
					Back
				</button>
			</div>
		);
	}
}

export default App;
