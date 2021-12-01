import React from 'react';
import Aboutme from '../../Aboutme/Aboutme';
import Contact from '../../Contact/Contact';
import Header from '../Header/Header';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div className='w-screen'>
            <Header></Header>
            <Aboutme></Aboutme>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;