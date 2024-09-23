import React, { useEffect } from "react";
import $ from "jquery";
import "../../css/star_detail.scss";

function StarDetail(props) {
  useEffect(() => {
    $(document).mouseup(function (e) {
      let clickwrap = $(".star-area");
      let movewrap = $(".Star-detail");
      //   console.log(movewrap);
      if (clickwrap.has(e.target).length == 0) {
        movewrap.hide();
      }
    });
  });
  return (
    <div id="Star-detail" className="Star-detail">
      <div className="star-area">
        <div className="star-detail-box">
          <h4>Starwars Clone Project</h4>
          <div className="desc-wrap">
          <h5>The Mandalorian Part</h5>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/star/video.png" alt="video" />
                  </li>
                  <li>
                    <img src="/images/star/video-tab.png" alt="video-tab" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>이미지 및 동영상 슬라이드</p>
                <ul>
                  <li>이미지/동영상 슬라이드 기능</li>
                  <li>동영상 클릭시 유튜브 영상 팝업창 생성</li>
                  <li>동영상 자동 재생 및 닫기 버튼 기능</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/star/chr.gif" alt="chr" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>이미지 무한 슬라이드</p>
                <ul>
                  <li>재귀호출 함수를 사용하여 이미지 무한이동</li>
                  <li>마우스 오버시 해당 이미지 확대 및 슬라이드 정지</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/star/galleries.png" alt="galleries" />
                  </li>
                  <li>
                    <img src="/images/star/gall-tab.png" alt="gall-tab" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>갤러리 팝업</p>
                <ul>
                  <li>이미지 썸네일 클릭 시 갤러리 팝업 생성</li>
                  <li>무한 사진 이동 기능</li>
                  <li>우측 하단 총 갯수와 현재 페이지번호 표시</li>
                  <li>닫기 버튼 활성화</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarDetail;
