import './style/style.scss';
import Header from './components/Header';
import SearchCountry from './components/SearchCountry';
import DisplayCountry from './components/DisplayCountry';
import CountryPage from './components/CountryPage';
import { GlobalProvider } from './components/GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<div className="app">
			<GlobalProvider>
				<BrowserRouter>
                    <Header />
					<Routes>
						<Route path="/" element={<><SearchCountry /><DisplayCountry /></>} />
						<Route path="/country-page" element={<CountryPage />} />
					</Routes>
				</BrowserRouter>
			</GlobalProvider>
		</div>
	);
};

export default App;
