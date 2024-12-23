import React, { useEffect } from "react";
import $ from "jquery";
import { wheelFn } from "../js/wheel";
import "../../css/donateTogether.scss";

function DonateTogether(props) {
  useEffect(() => {
    $(document).mouseup(function (e) {
      let clickwrap = $(".donateTogether-area");
      let movewrap = $(".donateTogether-detail");

      let isDisplay = $(".donateTogether-detail").css("display") != "none";

      if (isDisplay && clickwrap.has(e.target).length == 0) {
        movewrap.hide();
        window.addEventListener("wheel", wheelFn, { passive: false });
      }
    });
  });
  return (
    <div id="donateTogether-detail" className="donateTogether-detail">
      <div className="donateTogether-area">
        <div className="donateTogether-detail-box">
          <h4>DonateTogether Project</h4>
          <div className="desc-wrap">
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img
                      src="/images/donateTogether/register.png"
                      alt="register"
                    />
                  </li>
                  <li>
                    <img src="/images/donateTogether/login.png" alt="login" />
                  </li>
                  <li>
                    <img
                      src="/images/donateTogether/kakaologin.png"
                      alt="kakaologin"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>회원가입 / 로그인 / 카카오 로그인</p>
                <ul>
                  <li>회원가입 성공 시 로컬 스토리지에 저장</li>
                  <li>다음 주소 api 사용</li>
                  <li>
                    일반 로그인 시 로컬 스토리지의 회원 데이터 확인 후 일치하면
                    메인 페이지 이동
                  </li>
                  <li>카카오 로그인 구현</li>
                  <li>
                    - 카카오 로그인 버튼 클릭 → 카카오 로그인 페이지로 리디렉션.
                    <br /> - 카카오 로그인 완료 → 카카오는 인증 코드 (code)를
                    redirect_uri에 첨부하여 리디렉션.
                    <br /> - 리디렉션 후 코드 추출 → 리액트에서 URL에서 인증
                    코드를 추출.
                    <br /> - 카카오 API로 Access Token 요청 → 인증 코드를
                    사용하여 access token을 요청.
                    <br /> - Access Token을 세션 스토리지에 저장 → 얻은
                    access_token을 sessionStorage에 저장하여 이후 사용.
                  </li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/donateTogether/home.png" alt="home" />
                  </li>
                  <li>
                    <img
                      src="/images/donateTogether/addDonate.png"
                      alt="home"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>모금함 리스트 / 모금 제안</p>
                <ul>
                  <li>진행중인 모금함 리스트 최신순 구현</li>
                  <li>카테고리별 리스트 구분</li>
                  <li>
                    초기엔 8개만 출력하고 하단 더보기 버튼 클릭 시 노출 리스트
                    추가
                  </li>
                  <li>모금 제안 버튼 클릭시 모금글 작성 후 데이터 저장</li>
                </ul>
              </div>
            </div>

            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img
                      src="/images/donateTogether/donateDetail.png"
                      alt="donateDetail"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/donateTogether/donation.png"
                      alt="donation"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/donateTogether/donationList.png"
                      alt="donationList"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/donateTogether/share.png"
                      alt="share"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>기부 글 / 기부하기 / 기부 내역 / 카카오톡 공유</p>
                <ul>
                  <li>해당 글에서 기부 현황 표시</li>
                  <li>기부 금액, 응원글 작성시 기부 성공</li>
                  <li>하단에 회원별 기부 내역 구현</li>
                  <li>카카오톡 공유하기 구현</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/donateTogether/search.png" alt="search" />
                  </li>
                  <li>
                    <img
                      src="/images/donateTogether/searching.png"
                      alt="searching"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>검색 기능</p>
                <ul>
                  <li>
                    검색 기본 페이지에서 기부 횟수가 가장 높은 모금함 구현
                  </li>
                  <li>
                    검색 시 해당 키워드에 맞는 모금함 검색 및 검색 갯수 구현
                  </li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/donateTogether/mypage.png" alt="mypage" />
                  </li>
                  <li>
                    <img
                      src="/images/donateTogether/mydonation.png"
                      alt="mydonation"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/donateTogether/myinfo2.png"
                      alt="myinfo2"
                    />
                  </li>
                  <li>
                    <img src="/images/donateTogether/myinfo.png" alt="myinfo" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>마이페이지</p>
                <ul>
                  <li>본인의 총 기부금과 기부 횟수 구현</li>
                  <li>
                    회원의 id 와 도네이션 데이터의 회원 id 값이 일치하는 내역을
                    가져오고 도네이션 데이터와 모금함 데이터 id 가 일치하는 것을
                    가져와 나의 기부내역 구현
                  </li>
                  <li>일반 회원과 카카오 회원별 각각 회원정보 출력</li>
                  <li>로그아웃 구현</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="dt-desc">
                <p>🛠 트러블 슈팅 🛠</p>
                <ul className="etc-list trouble">
                  <li>
                    🚨 이슈 - DonateDetail에서 getDonateById 로 받아온 데이터를
                    바로 출력하게 할려했지만 오류 발생 <br />
                    💥 원인 - 데이터가 로드되기전에 donate 객체가 undefined
                    이였기 때문 <br />
                    💡 해결 - donate의 초기값을 null로 설정하여 if (!donate)로
                    donate가 존재하지 않는 경우 loading 상태변수를 통해 로딩
                    메시지를 표시하고 데이터가 로드 되면 loading 상태값을
                    변경하여 데이터 출력
                  </li>
                  <li>
                    🚨 이슈 - 기부글 을 등록하고 list로 상태변경하여 게시글
                    리스트로 출력했을때 새로 등록한 글이 바로 안뜨고 새로고침을
                    해야 뜨는 이슈 <br />
                    💥 원인 - 랜더링이 되지않고 바로 게시글 목록이 출력되었기
                    때문
                    <br />
                    💡 해결 - 데이터의 변경여부 상태값을 만들고 useQuery에서
                    로컬스토리지의 데이터 값이 변경되는것을 감지하면 다시
                    데이터를 불러오게 작성
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

export default DonateTogether;
