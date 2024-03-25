import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import './App.css';
import Navbar from './components/Navbar';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<CartProvider>
				<Navbar />
				{/* <Routes>
        <Route path='/' element={}/>
        <Route path='/' element={}/>
        <Route path='/' element={}/>
      </Routes> */}
			</CartProvider>
		</>
	);
}

export default App;
