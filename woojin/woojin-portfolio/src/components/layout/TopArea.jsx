import React, { useEffect, useLayoutEffect } from 'react';
import { changePage } from '../js/wheel';

import "../../css/top_area.scss";
function TopArea() {
    const changeScroll = (page) =>{
        changePage(page);
    }
    return (
        <div id='top-area'>
            <div className='gnb-box'>
                <nav className='gnb-menu'>
                    <ul>
                        <li onClick={()=>{changeScroll(0)}}>Home</li>
                        <li onClick={()=>{changeScroll(1)}}>About me</li>
                        <li onClick={()=>{changeScroll(2)}}>Skill</li>
                        <li onClick={()=>{changeScroll(3)}}>Works</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default TopArea;