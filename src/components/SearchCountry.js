import React, { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';
import '../style/searchCountry.scss';

const SearchCountry = () => {
	const [ data, setData ] = useContext(GlobalContext);

	useEffect(async () => {
		await axios.get('https://restcountries.com/v2/all').then((res) => {
			setData(res.data);
		});
	}, []);

	return (
		<div id="search-div">
			<span id="search-span">
				<i id="search-icon" className="fa-solid fa-magnifying-glass fa-xs" />
			</span>
			<input id="search-input" type="text" placeholder="Search for a country..." />
		</div>
	);
};

export default SearchCountry;
