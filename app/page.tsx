import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Cards from './components/Cards'

const Home = () => {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Navbar />
        <main>
          <Header />
          <Cards />
        </main>
      </main>
    </main>
  )
}

export default Home