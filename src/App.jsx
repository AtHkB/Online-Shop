import { Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import LoginArea from './components/LoginArea';
import Cart from './components/Cart';

function App() {
	return (
		<>
			<CartProvider>
				<Navbar />
				<main>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/login" element={<LoginArea />} />
					</Routes>
				</main>
			</CartProvider>
		</>
	);
}

export default App;
