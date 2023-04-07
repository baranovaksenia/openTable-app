'use client'

import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-white py-2 px-3 flex justify-between items-center">
			<a href="/" className="font-bold text-gray-700 text-2xl">
				OpenTable
			</a>
			<div className="flex items-center">
				<button
					className="block md:hidden"
					onClick={toggleMenu}
					aria-label="Toggle menu"
				>
					<svg
						className="w-6 h-6 text-gray-700 hover:text-gray-900"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						{isOpen ? (
							<AiOutlineClose size={18} />
						) : (
							<GiHamburgerMenu size={18} />
						)}
					</svg>
				</button>
				<div
					className={`${isOpen ? "block" : "hidden"
						} md:block md:flex-grow md:flex md:items-center`}
				>
					{/* TODO: add dropdown menu */}
					<button className="hidden md:block bg-blue-900 text-white border p-1 px-4 rounded mr-3">
						Sing In
					</button>
					<button className="hidden md:block border p-1 px-4 rounded">
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
