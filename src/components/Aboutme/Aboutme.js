import React from 'react';
import image from '../../images/about.png';
import html from '../../images/html.png';
import css from '../../images/css-3.png';
import bootstrap from '../../images/bootstrap.png';
import tailwind from '../../images/tailwind.png';
import mui from '../../images/material-ui.png';
import js from '../../images/javascript.png';
import react from '../../images/react.png';
import mongo from '../../images/mongodb.png';
import fire from '../../images/firebase.png';

const Aboutme = () => {
    return (
        <div className='bg-gray-100'>
            <div className='grid md:grid-cols-2 gap-4 w-4/5 mx-auto py-20'>
                <div className=' flex justify-center items-center'>
                    <img src={image} alt="" className='md:h-4/4 md:pr-6'/>
                </div>
                <div>
                <h2 className='text-4xl font-semibold pb-4 text-center '>About Me</h2>
                <p className='text-lg pb-10'>Built five plus projects using reactjs, nodejs, expressjs, bootstrap, tailwind, materialUi, and others necessery tools. I am MERN stack developer, still learning, and assist project with senior developer.</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                        <div className='max-w-sm max-auto mx-4 md:mx-8 rounded-full flex flex-col justify-center bg-white shadow-lg'>
                            <img src={react} alt="" className='h-16 w-16 object-cover mx-auto rounded-full ring-2 ring-green-400 shadow-xl'/>
                            <h4 className='text-xl font-medium text-center py-2 '>80%</h4>
                        </div>
                        <div className='max-w-sm max-auto mx-4 md:mx-8 rounded-full flex flex-col justify-center bg-white shadow-lg'>
                            <img src={js} alt="" className='h-16 w-16 object-cover mx-auto rounded-full ring-2 ring-green-400 shadow-xl'/>
                            <h4 className='text-xl font-medium text-center py-2 '>73%</h4>
                        </div>
                        <div className='max-w-sm max-auto mx-4 md:mx-8 rounded-full flex flex-col justify-center bg-white shadow-lg'>
                            <img src={mongo} alt="" className='h-16 w-16 object-cover mx-auto rounded-full ring-2 ring-green-400 shadow-xl'/>
                            <h4 className='text-xl font-medium text-center py-2 '>85%</h4>
                        </div>
                        <div className='max-w-sm max-auto mx-4 md:mx-8 rounded-full flex flex-col justify-center bg-white shadow-lg'>
                            <img src={html} alt="" className='h-16 object-cover mx-auto rounded-full ring-2 ring-green-400 shadow-xl'/>
                            <h4 className='text-xl font-medium text-center py-2 '>91%</h4>
                        </div>
                        <div className='max-w-sm max-auto mx-4 md:mx-8 rounded-full flex flex-col justify-center bg-white shadow-lg'>
                            <img src={css} alt="" className='h-16 object-cover mx-auto rounded-full ring-2 ring-green-400 shadow-xl'/>
                            <h4 className='text-xl font-medium text-center py-2 '>92%</h4>
                        </div>
                        <div className='max-w-sm max-auto mx-4 md:mx-8 rounded-full flex flex-col justify-center bg-white shadow-lg'>
                            <img src={bootstrap} alt="" className='h-16 object-cover mx-auto rounded-full ring-2 ring-green-400 shadow-xl'/>
                            <h4 className='text-xl font-medium text-center py-2 '>90%</h4>
                        </div>
                        <div className='max-w-sm max-auto mx-4 md:mx-8 rounded-full flex flex-col justify-center bg-white shadow-lg'>
                            <img src={tailwind} alt="" className='h-16 object-cover mx-auto rounded-full ring-2 ring-green-400 shadow-xl'/>
                            <h4 className='text-xl font-medium text-center py-2 '>87%</h4>
                        </div>
                        <div className='max-w-sm max-auto mx-4 md:mx-8 rounded-full flex flex-col justify-center bg-white shadow-lg'>
                            <img src={mui} alt="" className='h-16 w-16 object-cover mx-auto rounded-full ring-2 ring-green-400 shadow-xl'/>
                            <h4 className='text-xl font-medium text-center py-2 '>83%</h4>
                        </div>
                        <div className='max-w-sm max-auto mx-4 md:mx-8 rounded-full flex flex-col justify-center bg-white shadow-lg'>
                            <img src={fire} alt="" className='h-16 w-16 object-cover mx-auto rounded-full ring-2 ring-green-400 shadow-xl'/>
                            <h4 className='text-xl font-medium text-center py-2 '>82%</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;