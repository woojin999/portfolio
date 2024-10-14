import React, { useEffect } from "react";
import $ from "jquery";
import "../../css/calendar_detail.scss";
import { wheelFn } from "../js/wheel";

function CalendarDetail(props) {
  useEffect(() => {
    $(document).mouseup(function (e) {
      let clickwrap = $(".calendar-area");
      let movewrap = $(".calendar-detail");

      let isDisplay = $(".calendar-detail").css("display") != "none";

      if (isDisplay && clickwrap.has(e.target).length == 0) {
        movewrap.hide();
        window.addEventListener("wheel", wheelFn, { passive: false });
      }
    });
  });
  return (
    <div id="calendar-detail" className="calendar-detail">
      <div className="calendar-area">
        <div className="calendar-detail-box">
          <h4>Calendar Project</h4>
          <div className="desc-wrap">
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/calendar/todoAdd.gif" alt="todoAdd" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>일정 추가</p>
                <ul>
                  <li>Schedule 탭의 '+' 버튼을 클릭하면 등록 모달 창 생성</li>
                  <li>일정 입력 후 등록 하면 로컬 스토리지에 저장</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/calendar/todoList.gif" alt="todoAdd" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>일정 확인</p>
                <ul>
                  <li>캘린더와 Schedule탭에서 등록한 일정 확인</li>
                  <li>캘런더에는 일정이 2개까지만 표시되도록 구현</li>
                  <li>일정이 없을 경우 일정 없음 표시</li>
                </ul>
              </div>
            </div>

            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img
                      src="/images/calendar/todoDetail.gif"
                      alt="todoDetail"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>일정 상세보기</p>
                <ul>
                  <li>Schedule 탭에서 클릭하면 상세보기 가능</li>
                  <li>
                    닫기 버튼 클릭시 다시 일정 리스트로 변경
                  </li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img src="/images/calendar/todoEdit.gif" alt="todoEdit" />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>일정 수정</p>
                <ul>
                  <li>수정 아이콘 클릭시 일정 수정 가능</li>
                  <li>
                    내용 입력 후 버튼 클릭 시 변경된 일정으로 수정 
                  </li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <img
                      src="/images/calendar/todoDelete.gif"
                      alt="todoDelete"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>일정 삭제</p>
                <ul>
                  <li>휴지통 아이콘 클릭시 해당 일정을 로컬스토리지에서 삭제</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="dt-desc">
                <p>컴포넌트 분류</p>
                <ul className="etc-list">
                  <li>CalendarBox : react-calendar 라이브러리를 사용하여 전체적인 일정 관리</li>
                  <li>
                    Schedule : Schedule 탭에서 useState를 통해 list,detail,edit 상태 관리
                  </li>
                  <li>
                    TodoAddModal : 클릭된 날짜를 props로 받아와 입력된 값을 로컬스토리지에 저장
                  </li>
                  <li>
                    TodoItem : 해당 날짜의 데이터 값을 props 받아 온 후 map을 돌려 리스트 출력 
                  </li>
                  <li>
                    TodoDetail : 해당 일정의 데이터 값을 props 받아 온 후 값 출력
                  </li>
                  <li>
                    TodoEdit : useState로 받아온 값을 다시 입력된 값으로 로컬스토리지에 저장하여 변경
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

export default CalendarDetail;
