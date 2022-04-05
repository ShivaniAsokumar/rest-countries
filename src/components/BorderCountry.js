import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from './GlobalContext';
import '../style/borderCountry.scss';

const BorderCountry = ({ borderCountry }) => {
	// const [ borderName, setBorderName ] = useState('');
	const [ currentCountry, setCurrentCountry ] = useState({});
	const [
		data,
		setData,
		flag,
		setFlag,
		countryName,
		setCountryName,
		population,
		setPopulation,
		region,
		setRegion,
		subRegion,
		setSubRegion,
		topLevelDomain,
		setTopLevelDomain,
		currencies,
		setCurrencies,
		languages,
		setLanguages,
		borderCountries,
		setBorderCountries,
		capital,
		setCapital
	] = useContext(GlobalContext);

	useEffect(async () => {
		await axios.get(`https://restcountries.com/v2/alpha?codes=${borderCountry}`).then((res) => {
			setCurrentCountry(res.data[0]);
		});
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
		<div className="border-country-div" onClick={handleBorderClick}>
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
