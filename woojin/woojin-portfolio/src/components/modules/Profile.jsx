import React from 'react';
import "../../css/profile.scss"
function Profile(props) {
    return (
        <div id='profile-area'>
            <div>
                <h2>
                    About me
                </h2>
                <div className='pf-img'>
                    <img src="" alt="" />
                </div>
                <div className='pf-text'></div>
            </div>
        </div>
    );
}

export default Profile;