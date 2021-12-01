import React from 'react';
import image from '../../../images/web-developer.png'
const Header = () => {
    return (
        
            <div className=' w-screen md:h-screen grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 md:mt-10'>
                <div className='text-left flex justify-center items-center'>
                    <div className='mx-16 md:mt-12 mt-20'>
                        <h2 className='text-5xl text-yellow-600'>Welcome</h2>
                        <h4 className='text-2xl font-semibold text-gray-400'>I am</h4>
                        <hr/>
                        <h1 className='text-5xl font-medium py-1 text-gray-900'>Apu Kumar Debnath</h1>
                        <h3 className='text-3xl  text-yellow-600 pb-3'>React Js Developer</h3>
                        <p>Want to stand as a qualified professional. Love to take on challenges, work with a team, and enjoy coding.</p>
                        <button className=' text-xl border border-solid border-black rounded py-2 px-6 mt-6 hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-green-600 transform hover:scale-105 duration-500'><a href="/home#contact">Contact Me</a></button>
                        <button className=' text-xl border border-solid border-black rounded py-2 px-6 md:ml-4 mt-6 text-gray-100 bg-gray-900 hover:bg-gray-200 hover:text-black focus:ring-2 focus:ring-green-600 transform hover:scale-105 duration-500'><a href='https://drive.google.com/file/d/1TLInatzFv8EqZlPkWHq2jpVPfCwH8bkP/view?usp=sharing' target='blank' download>Download Resume</a></button>
                    </div>
                </div>
                <div className='my-10'>
                     <img src={image} alt="" className='object-cover items-baseline'></img>
                </div>
            </div>

    );
};

export default Header;