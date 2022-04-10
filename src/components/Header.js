import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { useNavigate } from 'react-router-dom';
import '../style/header.scss';

const Header = () => {
	const [
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		lightModeToggle,
		setLightModeToggle,
		colorTheme,
		setColorTheme
	] = useContext(GlobalContext);

	let navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

	const handleModeClick = () => {
		setLightModeToggle(!lightModeToggle);
		if (!lightModeToggle) {
			setColorTheme('light-mode');
			document.body.style = 'background: white;';
		} else {
			setColorTheme('dark-mode');
			document.body.style = 'background: #202c37;';
		}
	};

	return (
		<div className={`header-flex-container ${colorTheme}`}>
			<h2 onClick={handleClick} className="header-flex-item header-title">
				Where in the world?
			</h2>
			<p className="header-flex-item" onClick={handleModeClick}>
				<span className="moon">
					<i className={`fa-solid fa-${colorTheme === 'light-mode' ? 'sun' : 'moon'}`} />
				</span>
				{colorTheme === 'light-mode' ? <span>Light Mode</span> : <span>Dark Mode</span>}
			</p>
		</div>
	);
};

export default Header;
