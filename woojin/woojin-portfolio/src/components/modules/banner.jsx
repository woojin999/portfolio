import React from "react";

import "../../css/banner.scss";

function Banner(props) {
  return (
    <div id="banner-area" className="page">
      <div className="btitle">
        <h2 className="tit1" style={{margin:"0px"}}>
          WooJin's
          {/* <br /> */}
        </h2>
          <h2 className="tit2">
          Works Place

          </h2>
        <p className="desc">안녕하세요!!</p>
        <p className="desc">웹 개발자 이우진의 포트폴리오 입니다.</p>
        <p className="scroll-down">scroll down</p>
        <div className="scroll-bar"></div>
      </div>
    </div>
  );
}

export default Banner;
