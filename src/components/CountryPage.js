import React, { useContext } from 'react';
import Header from './Header';
import { GlobalContext } from './GlobalContext';

const CountryPage = () => {
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

	console.log(borderCountries);

	return (
		<React.Fragment>
			<div className="country-info-container">
				<img src={flag} alt={countryName} />
				<div className="country-side-column">
					<h3>{countryName}</h3>
					<div className="country-column-left">Left</div>
					<div className="country-column-right">Right</div>
					<div className="border-countries">Border Countries</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default CountryPage;
