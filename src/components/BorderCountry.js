import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from './GlobalContext';
import '../style/borderCountry.scss';

const BorderCountry = ({ borderCountry }) => {
	// const [ borderName, setBorderName ] = useState('');
	const [ currentCountry, setCurrentCountry ] = useState({});

	const [
		,
		,
		,
		setFlag,
		,
		setCountryName,
		,
		setPopulation,
		,
		setRegion,
		,
		setSubRegion,
		,
		setTopLevelDomain,
		,
		setCurrencies,
		,
		setLanguages,
		,
		setBorderCountries,
		,
		setCapital,
		,
		,
		colorTheme
	] = useContext(GlobalContext);

	useEffect(async () => {
		await axios
			.get(`https://restcountries.com/v2/alpha?codes=${borderCountry}`)
			.then((res) => {
				setCurrentCountry(res.data[0]);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleBorderClick = () => {
		setFlag(currentCountry.flag);
		if (currentCountry.name.includes('(')) {
			setCountryName(currentCountry.name.substring(0, currentCountry.name.indexOf('(')));
		} else {
			setCountryName(currentCountry.name);
		}

		setPopulation(currentCountry.population);
		setRegion(currentCountry.region);
		setSubRegion(currentCountry.subregion);
		setTopLevelDomain(currentCountry.topLevelDomain);
		setCurrencies(currentCountry.currencies);
		setLanguages(currentCountry.languages);
		setBorderCountries(currentCountry.borders);
		setCapital(currentCountry.capital);
	};

	return (
		<div
			className={`border-country-div ${colorTheme}`}
			onClick={handleBorderClick}
			style={colorTheme === 'light-mode' ? { boxShadow: '0 0 5px rgb(0 0 0 / 15%)' } : {}}>
			{currentCountry.name ? currentCountry.name.includes('(') ? (
				currentCountry.name.substring(0, currentCountry.name.indexOf('('))
			) : (
				currentCountry.name
			) : (
				currentCountry.name
			)}
		</div>
	);
};

export default BorderCountry;
