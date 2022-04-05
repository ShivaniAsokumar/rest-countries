import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';
import '../style/searchCountry.scss';

const SearchCountry = () => {
	const [ data, setData ] = useContext(GlobalContext);
	const [ searchInput, setSearchInput ] = useState('');
	const [ filterToggle, setFilterToggle ] = useState(false);

	useEffect(async () => {
		await axios
			.get('https://restcountries.com/v2/all')
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleInputChange = async (inputVal) => {
		console.log(inputVal);
		if (inputVal) {
			await axios
				.get(`https://restcountries.com/v2/name/${inputVal}`)
				.then((res) => {
					setData(res.data);
				})
				.catch((err) => console.log('ERROR'));
		}
	};

	const handleFilterButtonClick = () => {
		setFilterToggle(!filterToggle);
	};

	const handleFilterOptionClick = async (region) => {
		await axios
			.get(`https://restcountries.com/v2/continent/${region}`)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log('ERROR'));
	};

	return (
		<div id="search-filter-container">
			<div id="search-div">
				<span id="search-span">
					<i id="search-icon" className="fa-solid fa-magnifying-glass fa-xs" />
				</span>
				<input
					id="search-input"
					type="text"
					placeholder="Search for a country..."
					onChange={(e) => handleInputChange(e.target.value)}
				/>
			</div>
			<div id="filter-div">
				<button id="filter-button" onClick={handleFilterButtonClick}>
					Filter by Region
				</button>
				<ul className="filter-list" hidden={filterToggle ? 'hidden' : ''}>
					<li onClick={() => handleFilterOptionClick('Africa')} className="filter-option">
						Africa
					</li>
					<li className="filter-option">America</li>
					<li className="filter-option">Asia</li>
					<li className="filter-option">Europe</li>
					<li className="filter-option">Oceania</li>
				</ul>
			</div>
			{/* <div id="filter-div">
				<input id="filter-input" type="text" placeholder="Filter by Region" />
			</div> */}
		</div>
	);
};

export default SearchCountry;
