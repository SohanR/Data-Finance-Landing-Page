import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white ' >
        <div className='max-w-[1248px]  grid lg:grid-cols-3 mx-6'>
            <div className='lg:col-span-2' >
                <h1 className='md:text-4xl sm:text-3xl font-bold py-2' > Want tips & trics to optimize your flow ? </h1>
                <p>Sing up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3' >Notify Me</button>

                </div>
                    <p>We care bout the protction of your data. Read our <span className='text-[#00df9a]' >Privacy Policy</span></p>
            </div>
        </div>        
    </div>
  )
}

export default Newsletter