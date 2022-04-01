import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
	const [ data, setData ] = useState([]);
	const [ flag, setFlag ] = useState('');
	const [ countryName, setCountryName ] = useState('');
	const [ population, setPopulation ] = useState('');
	const [ region, setRegion ] = useState('');
	const [ capital, setCapital ] = useState('');

	return (
		<GlobalContext.Provider
			value={[
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
			]}>
			{props.children}
		</GlobalContext.Provider>
	);
};
