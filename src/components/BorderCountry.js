import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from './GlobalContext';
import '../style/borderCountry.scss';

const BorderCountry = ({ borderCountry }) => {
	const [ borderName, setBorderName ] = useState('');
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
		capital
	] = useContext(GlobalContext);

	useEffect(async () => {
		await axios.get(`https://restcountries.com/v2/alpha?codes=${borderCountry}`).then((res) => {
			console.log(res.data);
			setBorderName(res.data[0].name);
			// setFlag(country.flag);
			// setCountryName(country.name);
			// setPopulation(country.population);
			// setRegion(country.region);
			// setSubRegion(country.subregion);
			// setTopLevelDomain(country.topLevelDomain);
			// setCurrencies(country.currencies);
			// setLanguages(country.languages);
			// setBorderCountries(country.borders);
			// setCapital(country.capital);
		});
	}, []);

	const handleBorderClick = () => {};

	return <div className="border-country-div">{borderName}</div>;
};

export default BorderCountry;
