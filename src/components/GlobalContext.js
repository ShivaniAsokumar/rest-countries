import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
	const [ data, setData ] = useState([]);
	const [ flag, setFlag ] = useState('');
	const [ countryName, setCountryName ] = useState('');
	const [ population, setPopulation ] = useState('');
	const [ region, setRegion ] = useState('');
	const [ subRegion, setSubRegion ] = useState('');
	const [ capital, setCapital ] = useState('');
	const [ topLevelDomain, setTopLevelDomain ] = useState('');
	const [ currencies, setCurrencies ] = useState([]);
	const [ languages, setLanguages ] = useState([]);
	const [ borderCountries, setBorderCountries ] = useState([]);
	const [ lightModeToggle, setLightModeToggle ] = useState(false);
	const [ colorTheme, setColorTheme ] = useState('dark-mode');

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
				setCapital,
				lightModeToggle,
				setLightModeToggle,
				colorTheme,
				setColorTheme
			]}>
			{props.children}
		</GlobalContext.Provider>
	);
};
