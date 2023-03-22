import React from 'react'

function Plan() {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://source.unsplash.com/random/?beach" alt="Beach" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://source.unsplash.com/random/?sea" alt="Beach" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://source.unsplash.com/random/?tropical" alt="Beach" />
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://source.unsplash.com/random/?ocean" alt="Beach" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://source.unsplash.com/random/?palms" alt="Beach" />
      </div>

      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan your next trip</h3>
        <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellat tempore impedit nesciunt dolores,
         sunt aperiam aliquid nostrum doloribus minus perspiciatis ipsa quibusdam atque dolor! 
        </p>
        <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellat tempore impedit nesciunt dolores,
         sunt aperiam aliquid nostrum doloribus minus perspiciatis ipsa quibusdam atque dolor! 
        </p>
      </div>
      <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
      <button className='bg-black text-white border-black hover:shadow-xl'>Book a Trip</button>
    </div>
  )
}

export default Plan
