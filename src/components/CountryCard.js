import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import '../style/countryCard.scss';

// TODO: 1) Create a CountryPage for each country. 2) Create links to that page using React Router

const CountryCard = ({ country }) => {
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

	const handleClick = (country) => {
		setFlag(country.flag);
		setCountryName(country.name);
		setPopulation(country.population);
		setRegion(country.region);
		setSubRegion(country.subregion);
		setTopLevelDomain(country.topLevelDomain);
		setCurrencies(country.currencies);
		setLanguages(country.languages);
		setBorderCountries(country.borders);
		setCapital(country.capital);
	};

	return (
		<div className="card-container" onClick={() => handleClick(country)}>
			<img className="home-page-flag" src={country.flag} alt={country.name} />
			<div className="card-details">
				<h3>{country.name}</h3>
				<p>Population: {country.population}</p>
				<p>Region: {country.region}</p>
				<p>Capital: {country.capital}</p>
			</div>
		</div>
	);
};

export default CountryCard;
