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
		capital,
		setCapital
	] = useContext(GlobalContext);

	return (
		<React.Fragment>
			<h3>
				{flag}, {countryName}, {population}, {region}, {capital}
			</h3>
		</React.Fragment>
	);
};

export default CountryPage;
