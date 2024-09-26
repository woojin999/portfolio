import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

let pgNum = 0;
let stsWheel = false;
let elePage;
let totalCnt;

$(() => {
  // 페이지 요소
  elePage = $(".page");
  // 전체 페이지개수
  totalCnt = elePage.length;
}); /////////// load ///////////////

setTimeout(() => {
  window.scrollTo(0, 0);
}, 300);
function wheelFn(e) {
  // console.log("휠");
  e.preventDefault();

  if (stsWheel) return;
  stsWheel = true;
  setTimeout(() => {
    stsWheel = false;
  }, 500);
  let delta = e.wheelDelta;
  // 휠델타는 이벤트 객체에서 리턴해주는 방향,이동거리 등의 정보값
  // console.log("델타값:", delta);

  if (delta < 0) {
    // 아랫페이지로 가야하니까 페이지번호 증가
    pgNum++;
    // 한계수체크(끝번호고정)
    if (pgNum == totalCnt) {
      pgNum = totalCnt - 1;
      // 마지막페이지순번은 전체개수 -1
    } /// if//
  } else {
    // 반대는 윗방향이니까 페이지 번호 감소
    pgNum--;
    if (pgNum < 0) {
      pgNum = 0;
    } // if //
  }

  let pos = elePage[pgNum].offsetTop;

  // 페이지 스크롤 위치 이동하기
  window.scrollTo(0, pos);
  // console.log("wheel");
} // wheelFn 함수 ///////////

function changePage(page) {
  let height = elePage[page].offsetTop;
  window.scrollTo(0, height);
  pgNum = page;
}
// }
export { wheelFn, changePage };
