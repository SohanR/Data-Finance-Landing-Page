import React from 'react'
import laptop from './../assets/laptop.jpg'

export const Analitycs = () => {
  return (
    <div className='w-full bg-white py-16 px-4' >
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={laptop} alt="laptop" />

            <div className='flex flex-col justify-center ' >
                <p className='text-[#00df9a] font-bold uppercase' >Data Analitycs Dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl font-bold py-2' >Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam mollitia numquam neque id fugiat iusto, vitae tenetur ipsa a, delectus necessitatibus quam. Ipsa vitae fuga, dolor facilis rem expedita reiciendis?</p>

                <button className='bg-black text-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3' >Get Started</button>
            </div>
        </div>
    </div>
  )
}

