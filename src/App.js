import React, { useState, useEffect } from 'react';
import './App.css';
import './scss/styles.scss';

import { CardList } from './components/card-list';

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');

	const filteredMonsters = () =>  monsters.filter(monster => 
		monster.name.toLowerCase().includes(searchField.toLowerCase())
	)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(user => setMonsters(user));
	})

	return (
		<div className='App'>
			<input 
				type='search'
				placeholder='search monster' 
				onChange={e => setSearchField(e.target.value)}
			/>
			<CardList monsters={filteredMonsters()} />
		</div>
	);
}

export default App;
