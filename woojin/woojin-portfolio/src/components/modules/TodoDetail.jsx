import React, { useEffect } from "react";
import $ from "jquery";
import "../../css/todo_detail.scss";
import { wheelFn } from "../js/wheel";

function TodoDetail(props) {
  useEffect(() => {
    $(document).mouseup(function (e) {
      let clickwrap = $(".todo-area");
      let movewrap = $(".todo-detail");
      let ifr = $("iframe");

      let isDisplay = $(".todo-detail").css("display") != "none";

      if (isDisplay && clickwrap.has(e.target).length == 0) {
        movewrap.hide();
        ifr.attr("src", "");
        window.addEventListener("wheel", wheelFn, { passive: false });
      }
    });
  });
  return (
    <div id="todo-detail" className="todo-detail">
      <div className="todo-area">
        <div className="todo-detail-box">
          <h4>Todo Project</h4>
          <div className="desc-wrap">
 
            <div className="detail-wrap">
              <div className="col-7 dt-img">
                <ul>
                  <li>
                    <video src="/images/todolive.mp4" alt="todolive" controls muted loop/>
                  </li>
                </ul>
              </div>
              <div className="col-5 dt-desc">
                <p>프로젝트 기능</p>
                <ul>
                  <li>Todo List 항목 추가,삭제 기능</li>
                  <li>Todo 상태가 true 일 경우에는 취소 버튼, false 일 경우에는 완료 버튼으로 랜더링</li>
                  <li>Todo 상태가 변경 될 경우 알맞는 리스트에 노출</li>
                  <li>미디어 쿼리 적용</li>
                </ul>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="dt-desc">
                <p>컴포넌트 분류</p>
                <ul className="etc-list">
                  <li>Head.jsx : 상단 타이틀</li>
                  <li>AddTodo.jsx : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트. useState를 통해 상태 관리</li>
                  <li>
                  Item.jsx : 항목에 대한 정보를 보여 주는 컴포넌트. 객체를 props로 받아와서 데이터 출력
                  </li>
                  <li>List.jsx : 배열을 받아온 후 map을 사용하여 여러개의 Item 을 list에 출력</li>
                </ul>
              </div>
            </div>
            
            <div className="detail-wrap">
              <div className="dt-desc">
                <p>🛠 트러블 슈팅 🛠</p>
                <ul className="etc-list trouble">
                  <li>🚨 이슈 - 삭제 버튼을 클릭시 해당 항목이 아닌 첫번째 항목이 삭제되는 이슈 <br />
                  💥 원인 - 같은 li태그가 여러개여서 첫번째 태그가 선택이 되어 삭제됨<br />
                  💡 해결 - findIndex 를 사용하여 해당 항목의 id값과 데이터 항목 중 id값이 일치하는 지 확인후 splice를 사용하여 제거
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

export default TodoDetail;
