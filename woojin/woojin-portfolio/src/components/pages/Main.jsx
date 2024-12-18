import React from "react";
import { wheelFn } from "../js/wheel";
import Banner from "../modules/banner";
import Skill from "../modules/Skill";
import Works from "../modules/Works";
import Profile from "../modules/Profile";
import ProjectDetail from "../modules/ProjectDetail";
import HongDetail from "../modules/HongDetail";
import StarDetail from "../modules/StarDetail";
import KakaoDetail from "../modules/KakaoDetail";
import TodoDetail from "../modules/TodoDetail";
import CalendarDetail from "../modules/CalendarDetail";
import DonateTogether from "../modules/DonateTogether";
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
      <CalendarDetail/>
      <DonateTogether/>
    </>
  );
}

export default Main;
