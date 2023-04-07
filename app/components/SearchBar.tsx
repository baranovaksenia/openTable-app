import React from 'react'

const SearchBar = () => {
	return (
		<div className='text-left text-lg py-3 m-auto flex justify-center'>
			<input className='rounded text-lg mr-3 p-2 w-[450px]'
				placeholder='State, city or town'
			/>
			<button className='rounded bg-red-600 px-9 py-2 text-white'>Let's go</button>
		</div>
	)
}

export default SearchBar