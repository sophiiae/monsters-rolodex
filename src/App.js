import React, { useState, useEffect } from 'react';
import './App.css';
import './scss/styles.scss';

import { CardList } from './components/card-list/card-list';

const App = () => {
	const [state, setState] = useState({
		monsters: []
	});

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(user => setState({ monsters: user }))
	})

	return (
		<div className='App'>
			<CardList monsters={state.monsters} />
		</div>
	);
}

export default App;
