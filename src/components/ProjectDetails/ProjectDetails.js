import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const {id} = useParams();
    const [infos, setInfos] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/apudebnath/port-data/main/portfolio-data.json')
        .then(res => res.json())
        .then(data => setInfos(data))
    } , [id])
console.log(infos)

    useEffect(() => {
        const details = infos?.find(info => info?.id == id);
        setInfo(details)
        console.log(details)
    }, [infos])
    return (
        <div className='w-full'>
            <div className='  flex flex-col justify-center mx-w-ms mx-auto bg-gray-300'>
                <div className='w-4/5 mx-auto grid grid-cols-3 gap-4 pt-24 pb-12'>
                   <div>
                        <img className='w-full mx-auto shadow-xl rounded'src={info?.image} alt=""/>
                   </div>
                   <div>
                        <img className=' w-4/4 mx-auto shadow-xl rounded'src={info?.image} alt=""/>
                   </div>
                   <div>
                        <img className=' w-4/4 mx-auto shadow-xl rounded'src={info?.image} alt=""/>
                   </div>
                </div>
                <div className='text-center w-4/5 mx-auto pb-10'>
                    <h2 className='text-3xl'>{info?.title}</h2>
                    <h2 className='text-xl'>{info?.subTitle}</h2>
                    <h5 className='text-xl'><strong>Technology used:</strong> {info?.technology}</h5>
                    <h5 className='text-xl'><strong>Dutation:</strong> {info?.duration}</h5>
                    <h5 className='text-md pb-6'><strong>Project info:</strong> {info?.description}</h5>
                    <button className='shadow-xl bg-white py-1 px-6 rounded-lg border border-gray-600 text-lg hover:bg-green-500 hover:border-white hover:text-white'><a href={info?.live} target="blank"> Live View</a></button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;