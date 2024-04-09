import React from 'react'
import Hero from '../components/Hero'
import Cardone from '../components/Card'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='flex flex-wrap p-5 items-center justify-center'>
        <Cardone className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' />
        <Cardone className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' />
        <Cardone className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' />
        <Cardone className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' />
        <Cardone className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' />
        <Cardone className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' />
        <Cardone className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' />
        <Cardone className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' />
        <Cardone className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' />
      </div>
    </>
  )
}

export default Home
