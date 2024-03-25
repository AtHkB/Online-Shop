import React from 'react';
import { CartProvider, useCart } from 'react-use-cart';

const Cart = () => {
	const {
		isEmpty,
		totalUniqueItems,
		items,
		cartTotal,
		emptyCart,
		updateItemQuantity,
		removeItem,
	} = useCart();

	if (isEmpty) return <p>Your cart is empty</p>;
	return (
		<>
			<h1>Cart ({totalUniqueItems})</h1>

			<ul>
				{items.map((item) => (
					<li key={item.id}>
						{item.quantity} x {item.title}
						<button
							onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
						>
							-
						</button>
						<button
							onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
						>
							+
						</button>
						<button onClick={() => removeItem(item.id)}>&times;</button>
					</li>
				))}
			</ul>
			<section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
				<div className="mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-center">
						<h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
					</div>

					<div className="mx-auto mt-8 max-w-md md:mt-12">
						<div className="rounded-3xl bg-white shadow-lg">
							<div className="px-4 py-6 sm:px-8 sm:py-10">
								<div className="flow-root">
									<ul className="-my-8">
										{items.map((item) => {
											return (
												<li
													key={item.id}
													className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
												>
													<div className="shrink-0 relative">
														<span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
															{item.quantity}
														</span>
														<img
															className="h-24 w-24 max-w-full rounded-lg object-cover"
															src={item.thumbnail}
															alt=""
														/>
													</div>

													<div className="relative flex flex-1 flex-col justify-between">
														<div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
															<div className="pr-8 sm:pr-5">
																<p className="text-base font-semibold text-gray-900">
																	{item.title}
																</p>
																<p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
																	Rating of product:{item.rating}
																</p>
															</div>

															<div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
																<p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
																	${item.price}
																</p>
															</div>
														</div>

														<div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
															<button
																className="text-3xl"
																onClick={() =>
																	updateItemQuantity(item.id, item.quantity - 1)
																}
															>
																-
															</button>
															<button
																className="text-3xl"
																onClick={() =>
																	updateItemQuantity(item.id, item.quantity + 1)
																}
															>
																+
															</button>
															<button
																className="text-3xl"
																onClick={() => removeItem(item.id)}
															>
																&times;
															</button>
														</div>
													</div>
												</li>
											);
										})}
									</ul>
								</div>
								<hr className="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" />

								<div className="mt-6 flex items-center justify-between">
									<p className="text-sm font-medium text-gray-900">Total</p>
									<p className="text-2xl font-semibold text-gray-900">
										<span className="text-xs font-normal text-gray-400">
											USD
										</span>{' '}
										{cartTotal}$
									</p>
								</div>

								<div className="mt-6 text-center">
									<button
										type="button"
										className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
									>
										Place Order
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M13 7l5 5m0 0l-5 5m5-5H6"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Cart;
