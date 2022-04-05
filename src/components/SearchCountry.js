import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';
import '../style/searchCountry.scss';

const SearchCountry = () => {
	const [ data, setData ] = useContext(GlobalContext);
	const [ searchInput, setSearchInput ] = useState('');

	useEffect(async () => {
		await axios.get('https://restcountries.com/v2/all').then((res) => {
			setData(res.data);
		});
	}, []);

	// TODO: On input change, make api call with partial name. Get the result data, setData(resultData). Create another function handleInputChange that takes care of this. This function will make the api call. This function is triggered each time there is a change in the input. Changing data will automatically change DisplayCountry page.

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
				<input id="filter-input" type="text" placeholder="Filter by Region" />
			</div>
		</div>
	);
};

export default SearchCountry;
