export function wheelEventFn() {
  let pgNum = 0;
  let stsWheel = false;
  const elePage = document.querySelectorAll(".page");
  const totalCnt = elePage.length;
  // console.log("대상", elePage, totalCnt, "개");

  window.addEventListener("wheel", wheelFn, { passive: false });

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
    // console.log("pgNum:", pgNum,"total",totalCnt);

    let pos = elePage[pgNum].offsetTop;
    // offsetTop 은 최상단에서부터 거리
    // console.log("이동할 위치 ",pgNum ,pos);

    //5-2. 페이지 스크롤 위치 이동하기
    // scrollTo(0, y축이동값)
    window.scrollTo(0, pos);
  } // wheelFn 함수 ///////////
}
