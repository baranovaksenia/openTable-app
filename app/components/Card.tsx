import React from "react";

const Card = () => {
	return (
		<div className="my-8 rounded shadow-lg shadow-gray-200 bg-white duration-300 hover:-translate-y-1 cursor-pointer">
			<img
				src="https://resizer.otstatic.com/v2/photos/wide-huge/4/48527226.jpg"
				alt=""
				className="w-full h-36"
			/>
			<div className="p-2">
				<h3 className="font-semibold text-2xl mb-2">Caffe Concerto</h3>
				<div className="flex items-start">
					<div className="flex mb-2">****</div>
					<p className="ml-2">77 reviews</p>
				</div>
				<div className="flex text-red font-light  capitalize">
					<p className="mr-2">Euro Korean</p>
					<p className="mr-2">$$$$</p>
					<p>Toronto</p>
				</div>
				<p className='text-red-200 mt-1 font-bold text-sm'>Booked 3 times today</p>
			</div>
		</div>
	);
};

export default Card;
