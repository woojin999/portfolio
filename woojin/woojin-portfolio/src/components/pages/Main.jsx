import React from 'react';
import Banner from '../modules/banner';
import Skill from '../modules/Skill';
import Works from '../modules/Works';
import Profile from '../modules/Profile';
import Contact from '../modules/Contact';

function Main(props) {
    return (
        <>
        <Banner/>
        <Profile/>
        <Skill/>
        <Works/>
        <Contact/>
        </>
    );
}

export default Main;