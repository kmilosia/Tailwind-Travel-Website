import React from 'react'

function Rooms() {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-columns-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
        <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dignissimos laborum, enim rem, 
            voluptatem assumenda repellat dolorem placeat molestiae
             architecto minus praesentium exercitationem odio dicta voluptates maxime repudiandae. Tenetur, dicta.
        </p>
      </div>
      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img className='object-cover w-full h-full' src="https://source.unsplash.com/random/?hotel" alt="Hotel Room" />
        <img className='row-span-2 object-cover w-full h-full' src="https://source.unsplash.com/random/?hotel" alt="Hotel Room" />
        <img className='object-cover w-full h-full' src="https://source.unsplash.com/random/?hotel" alt="Hotel Room" />
      </div>
    </div>
  )
}

export default Rooms
