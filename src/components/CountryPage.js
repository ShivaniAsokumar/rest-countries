import React, { useContext } from 'react';
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
		<h3>
			{flag}, {countryName}, {population}, {region}, {capital}
		</h3>
	);
};

export default CountryPage;
