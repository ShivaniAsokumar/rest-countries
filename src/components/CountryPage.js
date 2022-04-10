import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { useNavigate } from 'react-router-dom';
import BorderCountry from './BorderCountry';
import '../style/countryPage.scss';

const CountryPage = () => {
	const [
		,
		,
		flag,
		,
		countryName,
		,
		population,
		,
		region,
		,
		subRegion,
		,
		topLevelDomain,
		,
		currencies,
		,
		languages,
		,
		borderCountries,
		,
		capital,
		,
		,
		,
		colorTheme
	] = useContext(GlobalContext);

	let navigate = useNavigate();
	const handleBackButtonClick = () => {
		navigate(-1);
	};

	return (
		<React.Fragment>
			{/* <Link to="/"> */}
			<button className={`back-button ${colorTheme}`} onClick={handleBackButtonClick}>
				Back
			</button>
			{/* </Link> */}
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
								{currencies ? (
									currencies.map(
										(currency, index) =>
											index === currencies.length - 1 ? currency.name : currency.name + ', '
									)
								) : (
									'None'
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
