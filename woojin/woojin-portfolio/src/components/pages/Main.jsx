import React, { useEffect, useLayoutEffect, useState } from "react";
import $ from "jquery";
import Banner from "../modules/banner";
import Skill from "../modules/Skill";
import Works from "../modules/Works";
import Profile from "../modules/Profile";
import ProjectDetail from "../modules/ProjectDetail";
import HongDetail from "../modules/HongDetail";
import StarDetail from "../modules/StarDetail";
import KakaoDetail from "../modules/KakaoDetail";
import { wheelFn } from "../js/wheel";
import TodoDetail from "../modules/TodoDetail";
function Main() {
  window.addEventListener("wheel", wheelFn, { passive: false });

  return (
    <>
      <Banner />
      <Profile />
      <Skill />
      <Works />
      <ProjectDetail />
      <HongDetail />
      <StarDetail />
      <KakaoDetail />
      <TodoDetail />
    </>
  );
}

export default Main;
