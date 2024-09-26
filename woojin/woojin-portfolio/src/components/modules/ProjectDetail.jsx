import React, { useEffect } from "react";
import $ from "jquery";

import { wheelFn } from "../js/wheel";

import "../../css/scp_detail.scss";

function ProjectDetail(props) {
  useEffect(() => {
    $(document).mouseup(function (e) {
      let clickwrap = $(".scp-area");
      let movewrap = $(".Scp-detail");
      //   console.log(movewrap);
      if (clickwrap.has(e.target).length == 0) {
        movewrap.hide();
        $("body").css("overflow","auto");
        window.addEventListener("wheel", wheelFn, { passive: false });
      }else{
        $("body").css("overflow", "hidden");
      }
    });
  });
  return (
    <div id="Scp-detail" className="Scp-detail">
      <div className="scp-area">
        <div className="scp-detail-box">
          <h4>Shoppingmall Clone Project</h4>
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
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/plants/product_list.png" alt="product_list" />
                  </li>
                  <li>
                    <img src="/images/plants/product_detail.png" alt="product_detail" />
                  </li>
                  <li>
                    <img src="/images/plants/product_swiper.png" alt="product_swiper" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>상품 리스트 / 상세 페이지</p>
                <ul>
                  <li>컴포넌트를 활용하여 반복 모듈 사용</li>
                  <li>해당 상품 클릭 시 키값을 갖고 상세 페이지로 이동 후 해당 데이터 출력</li>
                  <li>마우스 오버 시 이미지 변경 및 하단 장바구니 버튼 등장</li>
                  <li>
                    상품 수량 카운트 및 장바구니 기능
                  </li>
                  <li>
                    상세 페이지에서 이미지 클릭 시 스와이퍼 슬라이드 등장
                  </li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/plants/cart_list.png" alt="cart_list" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>상품 장바구니</p>
                <ul>
                  <li>
                    각각의 회원에 따라 장바구니에 담겨있는 상품이 다르도록 구현
                  </li>
                  <li>상품 리스트 또는 상세 페이지에서 장바구니 추가</li>
                  <li>장바구니 추가시 우측에서 장바구니 현황 슬라이드 노출</li>
                  <li>수량 업데이트 및 상품 삭제 기능</li>
                  <li>
                    토탈 수량, 가격 표시
                  </li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/plants/search.png" alt="search" />
                  </li>
                  <li>
                    <img src="/images/plants/search_page.png" alt="search_page" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>상품 검색</p>
                <ul>
                  <li>
                    상단 네비바에서 상품 검색기능
                  </li>
                  <li>검색 후 검색결과 페이지로 이동</li>
                  <li>검색 개수 및 검색 결과 출력</li>
                  <li>재검색 또는 상품 클릭 시 해당 상품페이지로 이동</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/plants/board.png" alt="board" />
                  </li>
                  <li>
                    <img src="/images/plants/board_detail.png" alt="board_detail" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>질문 게시판</p>
                <ul>
                  <li>
                    게시판 CRUD 구현
                  </li>
                  <li>로컬스토리지를 사용하여 데이터 저장</li>
                  <li>페이징 처리</li>
                  <li>조회수 기능(중복 조회수 카운트 방지)</li>
                  <li>로그인 했을경우에만 작성 가능</li>
                  <li>본인 게시물만 수정, 삭제 가능</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/plants/myinfo.PNG" alt="myinfo" />
                  </li>
                  <li>
                    <img src="/images/plants/myboard.PNG" alt="myboard" />
                  </li>
                  <li>
                    <img src="/images/plants/mycart.PNG" alt="mycart" />
                  </li>
                  
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>마이 페이지</p>
                <ul>
                  <li>
                    내 정보, 내 게시글, 내 장바구니, 로그아웃 구현
                  </li>
                  <li>회원가입 시 작성한 내 정보 확인</li>
                  <li>본인 게시글 출력 및 클릭 시 해당 게시글로 이동</li>
                  <li>장바구니 관리(수량 변경,삭제)</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="dt-desc">
                <p>기타 기능</p>
                <ul className="etc-list">
                  <li>
                    텍스트 배너 무한 슬라이드
                  </li>
                  <li>메인 페이지 스크롤 페이드 인아웃 기능</li>
                  <li>미디어쿼리 - 상품 리스트 스와이퍼로 변환 / 네비바 햄버거 노출 / 레이아웃 변경</li>
                  <li>FaQ 토글 기능</li>
                  <li>상단 네비 고정 및 상단 이동 버튼 기능</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
