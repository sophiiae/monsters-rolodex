import React, { useState, useEffect } from 'react';
import {
	CardList,
	SearchBox
} from './components/index';

import './App.css';
import './scss/styles.scss';

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(user => setMonsters(user));
	}, []);

	const fileredResult = monsters.filter(monster => 
		monster.name.toLowerCase().includes(searchField.toLowerCase())
	)

	return (
		<div className='App'>
			<SearchBox 
				placeholder='search monster' 
				handleChange={e => setSearchField(e.target.value)}/>
			<CardList monsters={fileredResult} />
		</div>
	);
}

export default App;
