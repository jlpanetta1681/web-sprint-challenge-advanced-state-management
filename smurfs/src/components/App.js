import React from 'react';
import Form from './Form';
import List from './List';
import './App.css';

const App = () => {
  return (
  <div className="App">
    
    <div>
    <h1 id='townName'>Smurf-Ville</h1>
    </div>

			<div id='formBox'>
				<Form />
			</div>
			<div className="smurfsList">
				<List />
   
			</div>
				<button>Delete Smurf</button>
      </div>
	);
};

export default App;
