import React, { useContext } from 'react';
import Header from './Header';
import { GlobalContext } from './GlobalContext';
import { Link } from 'react-router-dom';
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
		setCapital
	] = useContext(GlobalContext);

	console.log(borderCountries);

	return (
		<React.Fragment>
			<Link to="/">
				<button className="back-button">Back</button>
			</Link>
			<div className="country-info-container">
				<img src={flag} alt={countryName} className="main-column-left" />
				<div className="main-column-right">
					<h2 className="info-column-header">{countryName}</h2>
					<div className="info-column-container">
						<div className="info-column-left">
							<p>
								<span className="title">Native Name:</span> {countryName}
							</p>
							<p>
								<span className="title">Population:</span> {population}
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
								<span className="title">Currencies:</span> {currencies[0].name}
							</p>
							<p>
								<span className="title">Languages:</span> {languages[0].name}
							</p>
						</div>
					</div>

					{borderCountries ? (
						<div className="border-countries">
							<span className="title">Border Countries: </span>
							{borderCountries[0]}
						</div>
					) : (
						<div>No Borders</div>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default CountryPage;
