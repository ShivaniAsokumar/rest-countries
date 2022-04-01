import React, { useContext } from 'react';
import CountryCard from './CountryCard';
import { GlobalContext } from './GlobalContext';
import '../style/displayCountry.scss';

const DisplayCountry = () => {
	// TODO: Build a Card component. Pass down props into Card component. Iterate through data and display card component on the page.

	const [ data, setData ] = useContext(GlobalContext);

	// Maps through the array of countries, and displays them each as a Card on the page.
	return (
		<div className="display-flex-container">
			{data.map((country, index) => <CountryCard key={index} className="display-flex-item" country={country} />)}
		</div>
	);
};

export default DisplayCountry;
