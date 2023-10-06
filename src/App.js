import './App.css';

import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Mealsdetails from './pages/mealsdetails';
import Home from './pages/home';
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<Navbar>
				<SearchBox />
			</Navbar>
			<Routes>
        		<Route path="/" element={<Home />} />
        		<Route exact path="/meals/:idMeal" element={<Mealsdetails />} />
      		</Routes>
		</div>
	);
}

export default App;
