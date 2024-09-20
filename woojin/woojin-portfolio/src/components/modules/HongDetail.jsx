import React, { useEffect } from 'react';
import $ from "jquery";
import "../../css/hong_detail.scss";

function HongDetail(props) {
    useEffect(() => {
      $(document).mouseup(function (e) {
        let clickwrap = $(".hcp-area");
        let movewrap = $(".hcp-detail");
        //   console.log(movewrap);
        if (clickwrap.has(e.target).length == 0) {
          movewrap.hide();
        }
      });
    });
    return (
      <div id="hcp-detail" className="hcp-detail">
        <div className="hcp-area">
          <div className="hcp-detail-box">
            <h4>HongRuizhen Clone Project</h4>
            <div className="desc-wrap">
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/plants/signup.png" alt="signup" />
                  </li>
                  <li>
                    <img src="/images/plants/login.png" alt="login" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>회원가입 / 로그인</p>
                <ul>
                  <li>아이디, 패스워드, 이메일 정규식 사용</li>
                  <li>회원가입 성공 시 로컬 스토리지에 저장</li>
                  <li>
                    로그인 페이지에서 로컬 스토리지의 데이터 확인 후 일치하면
                    메인 페이지 이동
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HongDetail;