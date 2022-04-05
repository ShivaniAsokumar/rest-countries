import React, { useContext } from 'react';
import Header from './Header';
import { GlobalContext } from './GlobalContext';
import { Link } from 'react-router-dom';
import BorderCountry from './BorderCountry';
import '../style/countryPage.scss';

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
		setCapital,
		lightModeToggle,
		setLightModeToggle,
		colorTheme,
		setColorTheme
	] = useContext(GlobalContext);

	return (
		<React.Fragment>
			<Link to="/">
				<button className={`back-button ${colorTheme}`}>Back</button>
			</Link>
			<div className="country-info-container">
				<img src={flag} alt={countryName} className="main-column-left" />
				<div className={`main-column-right ${colorTheme}`}>
					<h2 className="info-column-header">{countryName}</h2>
					<div className="info-column-container">
						<div className="info-column-left">
							<p>
								<span className="title">Native Name:</span> {countryName}
							</p>
							<p>
								<span className="title">Population:</span> {population.toLocaleString()}
							</p>

							<p>
								<span className="title">Region:</span> {region}
							</p>
							<p>
								<span className="title">Subregion:</span> {subRegion}
							</p>
							<p>
								<span className="title" id="no-margin-bottom">
									Capital:
								</span>{' '}
								{capital}
							</p>
						</div>
						<div className="info-column-right">
							<p>
								<span className="title">Top Level Domain:</span> {topLevelDomain}
							</p>
							<p>
								<span className="title">Currencies:</span>{' '}
								{currencies.map(
									(currency, index) =>
										index === currencies.length - 1 ? currency.name : currency.name + ', '
								)}
							</p>
							<p>
								<span className="title">Languages:</span>{' '}
								{languages.map(
									(language, index) =>
										index === languages.length - 1 ? language.name : language.name + ', '
								)}
							</p>
						</div>
					</div>

					{borderCountries ? (
						<div className="border-countries">
							<span className="title">Border Countries: </span>
							{/* {borderCountries.map(
								(borderCountry, index) =>
									index === borderCountries.length - 1 ? borderCountry : borderCountry + ', '
							)} */}
							{borderCountries.map((borderCountry, index) => (
								<BorderCountry key={index} borderCountry={borderCountry} />
							))}
						</div>
					) : (
						<div>
							<span className="title"> No Border Countries </span>
						</div>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default CountryPage;
