import React from "react";

import "../../css/banner.scss";

function Banner(props) {
  return (
    <div id="banner-area">
      <div className="btitle">
        <h2>
          WooJin's
          <br />
          Works Place
        </h2>
        <p>안녕하세요!!</p>
        <p>웹 개발자 이우진의 포트폴리오 입니다.</p>
        <p className="scroll-down">scroll down</p>
        <div className="scroll-bar"></div>
      </div>
    </div>
  );
}

export default Banner;
