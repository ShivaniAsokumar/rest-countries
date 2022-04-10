import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import '../style/countryCard.scss';

// TODO: 1) Create a CountryPage for each country. 2) Create links to that page using React Router

const CountryCard = ({ country }) => {
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
		if (country.capital) {
			setCapital(country.capital);
		} else {
			setCapital('None');
		}
	};

	return (
		<div className={`card-container ${colorTheme}`} onClick={() => handleClick(country)}>
			<img className="home-page-flag" src={country.flag} alt={country.name} />
			<div className={`card-details ${colorTheme}`}>
				<h3 className="card-details-header">
					{country.name.includes('(') ? country.name.substring(0, country.name.indexOf('(')) : country.name}
				</h3>
				<p className="card-info">
					<span className="card-info-span">Population: </span>
					{country.population.toLocaleString()}
				</p>
				<p className="card-info">
					<span className="card-info-span">Region: </span>
					{country.region}
				</p>
				<p className="card-info">
					<span className="card-info-span">Capital: </span>
					{country.capital ? country.capital : 'None'}
				</p>
			</div>
		</div>
	);
};

export default CountryCard;
