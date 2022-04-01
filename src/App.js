import './style/style.scss';
import Header from './components/Header';
import SearchCountry from './components/SearchCountry';
import DisplayCountry from './components/DisplayCountry';
import CountryPage from './components/CountryPage';
import { GlobalProvider } from './components/GlobalContext';

const App = () => {
	return (
		<div className="app">
			<Header />
			<GlobalProvider>
				<SearchCountry />
				<DisplayCountry />
				<CountryPage />
			</GlobalProvider>
		</div>
	);
};

export default App;
