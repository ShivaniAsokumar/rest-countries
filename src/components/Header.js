import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/header.scss';

const Header = () => {
	let navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

	return (
		<div className="header-flex-container">
			<h2 onClick={handleClick} className="header-flex-item title">
				Where in the world?
			</h2>
			<p className="header-flex-item">
				<span id="moon">
					<i className="fa-solid fa-moon" />
				</span>
				Dark Mode
			</p>
		</div>
	);
};

export default Header;
