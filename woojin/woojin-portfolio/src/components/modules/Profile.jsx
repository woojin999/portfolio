import React from "react";

import "../../css/profile.scss";

function Profile(props) {
  return (
    <div id="profile-area">
      <div>
        <h2>About me</h2>
        <div className="profile-box">
          <div className="pf-img col-6">
            <img src="/images/myp.jpg" alt="" />
          </div>
          <div className="pf-text col-6">
            <div>
              <h3>이우진</h3>
              <p className="introduce">
                적극적으로 효율적 웹 환경을 구현하는 개발자
              </p>
              <p>DOB : 1999.10.07</p>
              <p>Email : 24864@naver.com</p>
              <p>
                Github :
                <a href="https://github.com/woojin999" target="_blank">
                  &nbsp;woojin999
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
