import React, { useContext } from 'react';
import CountryCard from './CountryCard';
import { GlobalContext } from './GlobalContext';
import { Link } from 'react-router-dom';
import '../style/displayCountry.scss';

const DisplayCountry = () => {
	// TODO: Build a Card component. Pass down props into Card component. Iterate through data and display card component on the page.

	const [ data ] = useContext(GlobalContext);

	// Maps through the array of countries, and displays them each as a Card on the page.
	return (
		<div className="display-flex-container">
			{data.map((country, index) => (
				<Link key={index} to="/country-page">
					<CountryCard className="display-flex-item" country={country} />
				</Link>
			))}
		</div>
	);
};

export default DisplayCountry;
