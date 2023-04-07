import React from "react";
import Card from "./Card";

const Cards = () => {
	return (
		<div className="py-3 px-36 mt-10 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default Cards;
