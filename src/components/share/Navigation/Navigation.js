import React from 'react';
import resume from '../../../images/Apu Kumar Debnath-resume.pdf';
import { ArrowDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className=' grid grid-cols-1 gap-4'>
            <div className='z-50 fixed w-screen px-2 h-20 shadow-lg bg-white text-gray-900 flex flex-row justify-between items-center md:px-16'>
                <div className=' brand-logo text-xl md:text-3xl font-bold'>
                    <Link to="/">apudebnath</Link>
                </div>
                <ul className='menu-list font-medium flex flex-row md:px-4'>
                    <li className='menu-list-item px-2 md:px-6'>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className='menu-list-item md:px-6'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className='menu-list-item md:px-6'>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li className='menu-list-item px-2 md:px-6'>
                        <button className=' border rounded bg-gray-800 text-white px-2 border-gray-900'>
                            <a href={resume}>
                                <ArrowDownIcon className="h-5 w-5 text-white inline"/>
                                Resume    
                            </a>
                        </button>
                    </li>
                </ul>
            </div>
        </div>    
    );
};

export default Navigation;