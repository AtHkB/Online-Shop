import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
	const [productsHomepage, setProductsHomepage] = useState([]);
	const [categories, setCategories] = useState([]);

	const getHomepageProducts = () => {
		axios
			.get('https://dummyjson.com/products?limit=20&skip=0')
			.then((response) => {
				setProductsHomepage(response.data.products);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getHomepageProducts();
	}, []);

	return (
		<>
			<h1 className="text-xl">What are you looking for? </h1>
			<h2>Some Products you could be intrested in...</h2>
			<div className="container w-full flex gap-5 flex-row flex-wrap justify-center">
				{productsHomepage?.map((product) => {
					return (
						<div
							key={product.id}
							className="w-60 h-80 rounded-2xl shadow-lg my-5"
						>
							<img
								className="w-full h-32"
								src={product.thumbnail}
								alt="Sunset in the mountains"
							/>
							<div className="px-3 py-3 flex flex-col justify-between items-center h-48">
								<div className="w-52 flex flex-col justify-start">
									<div>
										<p className="text-left">{product.title}</p>
									</div>
									<div>
										<p className="text-green-600 text-xs text-left">
											{product.price}${' '}
										</p>
									</div>
								</div>
								<div>
									<p className="text-gray-700 text-xs text-left">
										{product.description}
									</p>
								</div>
								<div className="flex justify-between gap-4">
									<button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2  rounded-full">
										Add to cart
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			{/* <div className="">
				<button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded-full mb-4 w-32">
					See all Products
				</button>
			</div> */}
		</>
	);
}
