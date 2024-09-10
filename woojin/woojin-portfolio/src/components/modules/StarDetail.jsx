import React, { useEffect } from 'react';
import $ from "jquery";
import "../../css/star_detail.scss";

function StarDetail(props) {
    useEffect(() => {
      $(document).mouseup(function (e) {
        let clickwrap = $(".star-area");
        let movewrap = $(".Star-detail");
        //   console.log(movewrap);
        if (clickwrap.has(e.target).length == 0) {
          movewrap.hide();
        }
      });
    });
    return (
      <div id="Star-detail" className="Star-detail">
        <div className="star-area">
          <div className="star-detail-box">
            <h4>Starwars Clone Project</h4>
          </div>
        </div>
      </div>
    );
}

export default StarDetail;