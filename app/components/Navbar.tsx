import React from "react";

const Navbar = () => {
	return (
		<nav className="bg-white p-2 flex justify-between">
			<a href="/" className="font-bold text-gray-700 text-2xl">
				OpenTable
			</a>
			<div>
				<div className="flex">
					<button className="bg-blue-900 text-white border p-1 px-4 rounded mr-3">
						Sing In
					</button>
					<button className="border p-1 px-4 rounded">Sign Up</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
