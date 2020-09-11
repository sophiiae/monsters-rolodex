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

	const handleChange = e => {
		setSearchField(e.target.value)
	}

	return (
		<div className='App'>
			<h1> Monster Loredex</h1>
			<SearchBox 
				placeholder='search monster' 
				handleChange={handleChange}/>
			<CardList monsters={fileredResult} />
		</div>
	);
}

export default App;
