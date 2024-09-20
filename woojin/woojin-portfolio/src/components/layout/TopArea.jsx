import React, { useEffect } from 'react';

import "../../css/top_area.scss";
import $ from "jquery";
function TopArea(props) {
    // useEffect(()=>{
    //     const elePage = document.querySelectorAll(".page");
    //     console.log(elePage);
    //     let home = elePage[0].offsetTop;
    //     let aboutme = elePage[1].offsetTop;
    //     let skill = elePage[2].offsetTop;
    //     let works = elePage[3].offsetTop;
        
    // });
    const changeScroll = (page) =>{
        const elePage = document.querySelectorAll(".page");
        let height = elePage[page].offsetTop;
        window.scrollTo(0,height);
    }
    return (
        <div id='top-area'>
            <div className='gnb-box'>
                <nav className='gnb-menu'>
                    <ul>
                        <li onClick={(e)=>{changeScroll(0)}}>Home</li>
                        <li onClick={(e)=>{changeScroll(1)}}>About me</li>
                        <li onClick={(e)=>{changeScroll(2)}}>Skill</li>
                        <li onClick={(e)=>{changeScroll(3)}}>Works</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default TopArea;