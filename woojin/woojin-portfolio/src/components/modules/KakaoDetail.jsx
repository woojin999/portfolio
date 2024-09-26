import React, { useEffect } from "react";
import $ from "jquery";
import "../../css/kakao_detail.scss";
import { wheelFn } from "../js/wheel";

function KakaoDetail(props) {
  useEffect(() => {
    $(document).mouseup(function (e) {
      let clickwrap = $(".kakao-area");
      let movewrap = $(".kakao-detail");
      let ifr = $("iframe");

      //   console.log(movewrap);
      if (clickwrap.has(e.target).length == 0) {
        movewrap.hide();
        $("body").css("overflow", "auto");
        ifr.attr("src", "");
        window.addEventListener("wheel", wheelFn, { passive: false });
      }
    });
  });
  return (
    <div id="kakao-detail" className="kakao-detail">
      <div className="kakao-area">
        <div className="kakao-detail-box">
          <h4>KakaoTogether Clone Project</h4>
          <div className="desc-wrap">
            <h5>ERD</h5>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/kakao/erd.png" alt="erd" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>테이블</p>
                <ul>
                  <li>member</li>
                  <li>board</li>
                  <li>donation</li>
                  <li>image_file</li>
                </ul>
              </div>
            </div>

            <h5 className="sub-title">기능</h5>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/kakao/signup.png" alt="signup" />
                  </li>
                  <li>
                    <img src="/images/kakao/login.png" alt="login" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>회원가입 / 로그인</p>
                <ul>
                  <li>회원가입시 주소 api사용</li>
                  <li>카카오 소셜 로그인 구현</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/kakao/board.png" alt="board" />
                  </li>
                  <li>
                    <img src="/images/kakao/board-reg.png" alt="board" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>기부글 리스트 및 등록</p>
                <ul>
                  <li>카테고리 별 게시글 리스트</li>
                  <li>기부 금액에 따라 게이지바 구현</li>
                  <li>페이징 및 최신순, 종료 임박순 정렬</li>
                  <li>기부 글 작성시 파일 첨부기능</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/kakao/board-detail.png" alt="board" />
                  </li>
                  <li>
                    <img src="/images/kakao/kakaotalk.png" alt="kakaotalk" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>게시글 상세페이지 / 기부하기 / 카카오공유</p>
                <ul>
                  <li>게시글 디테일 정보 출력</li>
                  <li>기부하기(팝업창) 기능(기부 금액 증가 및 댓글 등록)</li>
                  <li>응원하기 기능</li>
                  <li>게시글 카카오 공유 기능</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/kakao/mydonate.png" alt="mydonate" />
                  </li>
                  <li>
                    <img
                      src="/images/kakao/donate-list.png"
                      alt="donate-list"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>나의 기부 게시글 / 나의 기부 내역 리스트</p>
                <ul>
                  <li>본인의 기부게시글 작성내역 리스트 출력</li>
                  <li>본인의 기부내역 리스트 출력</li>
                  <li>클릭시 디테일 페이지로 이동</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap detail-ifr">
              <div className="dt-desc">
                <p>구현영상</p>
                <iframe
                  // width="900"
                  // height="600"
                  src="https://www.youtube.com/embed/7Y1O45--hq0"
                  title="토이프로젝트"
                  muted
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KakaoDetail;
