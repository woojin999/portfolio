import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "../../css/works.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Works(props) {
  return (
    <div id="works-area">
      <div>
        <h2>Works</h2>
        <div className="works-box">
          <Swiper
            spaceBetween={30}
            // centeredSlides={true}
            // autoplay={{
            //   delay: 4500,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <h3>Shoppingmall Clone Project</h3>
                <div className="sw-box">
                  <div className="col-6 sw-img-box">
                    <img src="images/plants.png" alt="" />
                  </div>
                  <div className="col-6 sw-txt-box">
                    <div className="sw-tb">
                      <div className="info-tit">SKILLS</div>
                      <div className="info-desc sdesc">React</div>
                      <div className="info-desc sdesc">JavaScript</div>
                      <div className="info-desc sdesc">Sass</div>
                    </div>
                    <div className="sw-tb">
                      <div className="info-tit">TOOLS</div>
                      <div className="info-desc tdesc">Visual Studio Code</div>
                    </div>
                    <div className="sw-tb">
                      <div className="info-tit">진행기간</div>
                      <div className="info-desc">24.06.28 ~ 24.07.24</div>
                    </div>
                    <div className="sw-tb">
                      <div className="info-tit">개발인원</div>
                      <div className="info-desc">1명</div>
                    </div>
                    <div className="sw-tb">
                      <div className="info-tit">역할</div>
                      <div className="info-desc rdesc">기획</div>
                      <div className="info-desc rdesc">개발</div>
                    </div>
                    <div className="sw-tb">
                      <div className="info-tit">기여도</div>
                      <div className="info-desc">100%</div>
                    </div>
                    <div className="link-url">
                      <div>자세히 보기</div>
                      <div>
                        <a
                          href="https://woojin999.github.io/FED-RF-2nd-PJ-LEE_WOO_JIN/2%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4/plants-app/build"
                          target="_blank"
                        >
                          Site URL
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://github.com/woojin999/FED-RF-2nd-PJ-LEE_WOO_JIN/tree/main/2%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4/plants-app"
                          target="_blank"
                        >
                          GitHube URL
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Works;
