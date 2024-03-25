import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/icons8-logo-100.png'; 

const Navbar = () => {
	// State to manage the navbar's visibility
	const [nav, setNav] = useState(false);
	const navigate = useNavigate();

	// Toggle function to handle the navbar's display
	const handleNav = () => {
		setNav(!nav);
	};

	// Array containing navigation items
	const navItems = [
		{ id: 5, text: 'Cart' },
		{ id: 6, text: 'Login' },
	];

	return (
		<div className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
			{/* Logo */}
			<img 
                src={Logo} 
				className="w-10 text-3xl font-bold text-[#00df9a] cursor-pointer"
				onClick={() => {
					navigate('/');
				}}
			/>
				
			

			{/* Desktop Navigation */}
			<ul className="hidden md:flex">
				{navItems.map((item) => (
                    <li
                    key={item.id}
                    className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
                >
                    <NavLink to={`/${item.text.toLowerCase()}`}>{item.text}</NavLink>
                </li>
				))}
			</ul>

			{/* Mobile Navigation Icon */}
			<div onClick={handleNav} className="block md:hidden">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			{/* Mobile Navigation Menu */}
			<ul
				className={
					nav
						? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
						: 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
				}
			>
				{/* Mobile Logo */}
				<h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

				{/* Mobile Navigation Items */}
				{navItems.map((item) => (
					<li
						key={item.id}
						className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
					>
						{item.text}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
