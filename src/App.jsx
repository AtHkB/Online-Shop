import { Routes, Route } from 'react-router-dom';
// import { CartProvider } from 'react-use-cart';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AllProducts from './components/AllProducts';

function App() {
	return (
		<>
			{/* <CartProvider> */}
			<Navbar />
			<Homepage />
			<AllProducts />
			{/* </CartProvider> */}
		</>
	);
}

export default App;
