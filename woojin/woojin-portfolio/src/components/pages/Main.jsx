import React, { useEffect, useLayoutEffect, useState } from "react";
import Banner from "../modules/banner";
import Skill from "../modules/Skill";
import Works from "../modules/Works";
import Profile from "../modules/Profile";
import ProjectDetail from "../modules/ProjectDetail";
import HongDetail from "../modules/HongDetail";
import StarDetail from "../modules/StarDetail";
import KakaoDetail from "../modules/KakaoDetail";
// import { wheelEventFn } from "../js/wheel";
import { wheelFn } from "../js/wheel";
function Main() {
  useLayoutEffect(() => {
    window.addEventListener("wheel", wheelFn, { passive: false });
    
    // wheelEventFn();
    // window.addEventListener("wheel", wheelEventFn, { passive: false });


  });
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
    </>
  );
}

export default Main;
