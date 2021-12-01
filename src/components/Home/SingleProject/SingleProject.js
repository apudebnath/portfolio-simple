import React from 'react';
import { Link } from 'react-router-dom';

const SingleProject = ({info}) => {
    const {id} = info;
    return (
        <div className='rounded-lg md:p-10 container mx-auto shadow-2xl' style={{backgroundImage: `url(${info.image})`, backgroundRepeat:'no-repeat', backgroundSize: '100%', objectFit: 'cover'}}>
            <div className='bg-gradient-to-br from-yellow-300 hover:from-yellow-500 hover:bg-opacity-80  bg-opacity-50 rounded-lg transform hover:scale-110 duration-500'>
                <div className='py-24 text-center rounded-lg'>
                    <h2 className=' text-2xl hover:text-3xl text-white pb-2'>{info.title}</h2>
                    <Link to={`/projectDetails/${id}`}><button className='bg-white text-md hover:bg-green-500 rounded py-1 px-5'>Details</button></Link>
                    <button className='bg-white text-md hover:bg-green-500 rounded py-1 px-5 ml-2'><a href={info?.live} target="blank"> Live Preview</a></button>
                </div> 
            </div>            
        </div>
    );
};

export default SingleProject;