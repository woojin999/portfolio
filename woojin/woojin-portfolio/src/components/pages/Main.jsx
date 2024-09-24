import React, { useEffect, useState } from "react";
import Banner from "../modules/banner";
import Skill from "../modules/Skill";
import Works from "../modules/Works";
import Profile from "../modules/Profile";
import ProjectDetail from "../modules/ProjectDetail";
import HongDetail from "../modules/HongDetail";
import StarDetail from "../modules/StarDetail";
import KakaoDetail from "../modules/KakaoDetail";
function Main() {
  return (
    <>
      <Banner />
      <Profile />
      <Skill />
      <Works/>
      <ProjectDetail />
      <HongDetail />
      <StarDetail />
      <KakaoDetail />
    </>
  );
}

export default Main;
