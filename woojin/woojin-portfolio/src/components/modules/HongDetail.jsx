import React, { useEffect } from "react";
import $ from "jquery";
import "../../css/hong_detail.scss";
import { wheelFn } from "../js/wheel";

function HongDetail(props) {
  useEffect(() => {
    $(document).mouseup(function (e) {
      let clickwrap = $(".hcp-area");
      let movewrap = $(".hcp-detail");
      //   console.log(movewrap);
      if (clickwrap.has(e.target).length == 0) {
        movewrap.hide();
        $("body").css("overflow", "auto");
        window.addEventListener("wheel", wheelFn, { passive: false });
      }
    });
  });
  return (
    <div id="hcp-detail" className="hcp-detail">
      <div className="hcp-area">
        <div className="hcp-detail-box">
          <h4>HongRuizhen Clone Project</h4>
          <div className="desc-wrap">
          <h5>메인 페이지 기능</h5>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/hong/main-banner.png" alt="main-banner" />
                  </li>
                  <li>
                    <img src="/images/hong/ham-menu.png" alt="ham-menu" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>배너 / 전체 메뉴</p>
                <ul>
                  <li>이미지 배너 슬라이드</li>
                  <li>우측 미니 박스 클릭 시 해당 배너로 슬라이드</li>
                  <li>클릭 된 이미지 박스는 숨김 처리</li>
                  <li>
                    상단 우측 햄버거 버튼 클릭 시 전체 메뉴창 왼쪽에서 슬라이드
                  </li>
                  <li>
                    상단 네비바 오버 시 각 파트의 서브메뉴와 이미지 하단
                    슬라이드
                  </li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/hong/product.png" alt="product" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>상품 리스트</p>
                <ul>
                  <li>카테고리 별 메뉴 리스트(new, sandwich, dessert, drink) 구현</li>
                  <li>이미지 마우스 오버 시 배경있는 이미지로 변경</li>
                  <li>양쪽 이동 버튼 클릭시 슬라이드 기능</li>
                  <li>
                    하단 버튼 색상 변경 애니메이션
                  </li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/hong/event.png" alt="event" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>EVENT</p>
                <ul>
                  <li>이동 버튼 클릭 시 이미지 무한 슬라이드 기능</li>
                  <li>이미지 마우스 오버 시 이미지 확대 및 하단에서 텍스트 박스 등장</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/hong/news.png" alt="news" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>NEWS</p>
                <ul>
                  <li>마우스 오버시 색상 변경</li>
                  <li>하단 버튼 색상 변경 애니메이션</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/hong/video1.png" alt="video1" />
                  </li>
                  <li>
                    <img src="/images/hong/video2.png" alt="video2" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>VIDEO</p>
                <ul>
                  <li>재생 버튼 클릭시 썸네일 이미지가 사라지고 유튜브 동영상 재생</li>
                  <li>우측 하단 원형 이미지 두개 중 교차하여 동영상 선택 기능</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/hong/followus.png" alt="followus" />
                  </li>
                  <li>
                    <img src="/images/hong/footer.png" alt="footer" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>Follow us / Footer</p>
                <ul>
                  <li>이미지 마우스 오버 시 가상요소를 사용 하여 좌측하단, 우측하단부터 출발하여 테두리 생성</li>
                  <li>하단 텍스트 배너 무한 슬라이드</li>
                </ul>
              </div>
            </div>
            <h5 className="sub-title">서브 페이지 기능</h5>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/hong/sub-main.gif" alt="sub-main" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>Sub Main</p>
                <ul>
                  <li>텍스트 좌측 별 이모티콘 축소확대 애니메이션</li>
                  <li>페이지 로딩 시 샌드위치 이미지 애니메이션</li>
                  <li>샌드위치 텍스트 및 우측 포인트 이모티콘 애니메이션</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/hong/sub-ani.gif" alt="sub-main" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>Simple / Sweet / Soft</p>
                <ul>
                  <li>스크롤 상하 이동 시에 백그라운드 색상 변경</li>
                  <li>스크롤 이동 시에 텍스트 박스 변경 및 재료 이미지 변경</li>
                  <li>스크롤 위치에 따라 재료 이미지 포지션 이동</li>
                  <li>샌드위치 이미지 흔들리는 애니메이션</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="dt-desc">
                <p>기타 기능</p>
                <ul className="etc-list">
                  <li>
                    미디어 쿼리
                  </li>
                  <li>메인 페이지 스크롤시 해당 파트로 바로 이동(휠 이벤트)</li>
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
