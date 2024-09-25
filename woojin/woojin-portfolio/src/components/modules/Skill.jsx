import React from "react";

import "../../css/skill.scss";

function Skill(props) {
  return (
    <div id="skill-area" className="page">
      <div>
        <h2>Skill</h2>
        <p>현재까지 배우고 사용 해봤던 기술입니다</p>
        <div className="skill-box">
          <ul>
            <li>
              <img src="/images/skill/react.png" alt="" />
            </li>
            <li>
              <img src="/images/skill/html.png" alt="html" />
            </li>
            <li>
              <img src="/images/skill/css.png" alt="css" />
            </li>
            <li>
              <img src="/images/skill/javascript.png" alt="js" />
            </li>
            <li>
              <img src="/images/skill/sass.png" alt="sass" />
            </li>
            <li>
              <img src="/images/skill/jquery.png" alt="jquary" />
            </li>
            <li>
              <img src="/images/skill/nodejs.png" alt="node" />
            </li>
            <li>
              <img src="/images/skill/java.png" alt="java" />
            </li>
            <li>
              <img src="/images/skill/spring.png" alt="spring" />
            </li>
            <li>
              <img src="/images/skill/mysql.png" alt="mysql" />
            </li>
            <li>
              <img src="/images/skill/mybatis.jpg" alt="mybatis" />
            </li>
            <li>
              <img src="/images/skill/github.png" alt="github" />
            </li>
            <li>
              <img src="/images/skill/vercel.png" alt="vercel" />
            </li>
            <li>
              <img src="/images/skill/aws.png" alt="aws" />
            </li>
          </ul>
          <ul className="snd-ul">
          </ul>
          <ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skill;
