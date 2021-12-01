import React, { useEffect, useState } from 'react';
import SingleProject from '../SingleProject/SingleProject';

const Project = () => {
    const [infos, setInfos] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/apudebnath/port-data/main/portfolio-data.json')
        .then(res => res.json())
        .then(data => setInfos(data))
    } , [])
    return (
        <div className='w-screen bg-gray-200 pb-20 mx'>
            <div className='py-20  flex justify-center items-center'>
                <div className='text-center px-10'>
                    <h2 className='text-4xl text-black font-semibold '>My Recent Project</h2>
                    <p className='text-xl'>This is few of my recent react based project, mainly niche focused web app </p>
                </div>
            </div>
            <div className=' w-4/5 mx-auto md:flex md:flex-row'>
                 <div className='md:w-1/5 pr-6 pb-10'>
                     <h2 className='text-3xl md:text-5xl font-bold'>This is real time project</h2>
                     <p className='text-xl font-semibold pt-10'>It is a REACT based project, where everything is simply organized, so that it can be used for different purpose.I use React Router which is more beneficial for your website, because its help to user quick browsing. User feel fastest loading effect and enjoy it.</p>
                 </div>
                 <div className='w-4/5 mx-auto grid grid-cols md:grid-cols-2 gap-10'>
                     {
                        infos.map(info => <SingleProject
                        key={info.id}
                        info={info}
                        ></SingleProject>)
                     }
                 </div>
            </div>
          
        </div>
    );
};

export default Project;