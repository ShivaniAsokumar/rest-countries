import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';
import '../style/searchCountry.scss';

const SearchCountry = () => {
	const [ , setData, , , , , , , , , , , , , , , , , , , , , , , colorTheme ] = useContext(GlobalContext);
	const [ filterToggle, setFilterToggle ] = useState(true);

	useEffect(
		() => {
			const fetchData = async () => {
				await axios
					.get('https://restcountries.com/v2/all')
					.then((res) => {
						setData(res.data);
					})
					.catch((err) => {
						console.log(err);
					});
			};

			fetchData();
		},
		[ setData ]
	);

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
		console.log(colorTheme);
	};

	const handleFilterOptionClick = async (region) => {
		setFilterToggle(!filterToggle);
		let resultData;
		await axios
			.get(`https://restcountries.com/v2/all`)
			.then((res) => {
				resultData = res.data;
				console.log(resultData);

				let filteredCountries = resultData.filter((country) => country.region === region);
				setData(filteredCountries);
			})
			.catch((err) => console.log('ERROR'));
	};

	return (
		<div id="search-filter-container">
			<div className={`search-div ${colorTheme}`}>
				<span className={`search-span ${colorTheme}`}>
					<i id="search-icon" className="fa-solid fa-magnifying-glass fa-xs" />
				</span>
				<input
					className={`search-input ${colorTheme}`}
					type="text"
					placeholder="Search for a country..."
					onChange={(e) => handleInputChange(e.target.value)}
				/>
			</div>
			<div className={`filter-div ${colorTheme}`}>
				<button className={`filter-button ${colorTheme}`} onClick={handleFilterButtonClick}>
					Filter by Region
				</button>
				<ul className={`filter-list ${colorTheme}`} hidden={filterToggle ? 'hidden' : ''}>
					<li onClick={() => handleFilterOptionClick('Africa')} className={`filter-option ${colorTheme}`}>
						Africa
					</li>
					<li onClick={() => handleFilterOptionClick('Americas')} className={`filter-option ${colorTheme}`}>
						America
					</li>
					<li onClick={() => handleFilterOptionClick('Asia')} className={`filter-option ${colorTheme}`}>
						Asia
					</li>
					<li onClick={() => handleFilterOptionClick('Europe')} className={`filter-option ${colorTheme}`}>
						Europe
					</li>
					<li onClick={() => handleFilterOptionClick('Oceania')} className={`filter-option ${colorTheme}`}>
						Oceania
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SearchCountry;
