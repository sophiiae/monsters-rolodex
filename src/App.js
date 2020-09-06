import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [state, setState] = useState({
		monsters: [
			{
				name: 'Frankensteins',
				id: 'asc1'
			},
			{
				name: 'Dracula',
				id: 'asr2'
			},
			{
				name: 'Zombie',
				id: 'as1w'
			}
		]
	})

	return (
		<div className='App'>
			{
				state.monsters.map(monster => (
					<h1 key={ monster.id }>{ monster.name }</h1>
				))
			}
		</div>
	);
}

export default App;
