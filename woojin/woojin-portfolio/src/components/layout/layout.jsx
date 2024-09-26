import React from 'react';
import TopArea from './TopArea';
import MainArea from './MainArea';
import FooterArea from './FooterArea';
import { wheelFn } from '../js/wheel';

function Layout(props) {
    return (
        <>
        <TopArea/>
        <MainArea/>
        <FooterArea/>
        </>

    );
}

export default Layout;