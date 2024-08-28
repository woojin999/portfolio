import React from 'react';

import "../../css/top_area.scss";

function TopArea(props) {
    return (
        <div id='top-area'>
            <div className='gnb-box'>
                <nav className='gnb-menu'>
                    <ul>
                        <li>Home</li>
                        <li>About me</li>
                        <li>Skill</li>
                        <li>Works</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default TopArea;