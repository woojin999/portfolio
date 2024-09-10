import React, { useEffect } from 'react';
import $ from "jquery";
import "../../css/hong_detail.scss";

function HongDetail(props) {
    useEffect(() => {
      $(document).mouseup(function (e) {
        let clickwrap = $(".hcp-area");
        let movewrap = $(".hcp-detail");
        //   console.log(movewrap);
        if (clickwrap.has(e.target).length == 0) {
          movewrap.hide();
        }
      });
    });
    return (
      <div id="hcp-detail" className="hcp-detail">
        <div className="hcp-area">
          <div className="hcp-detail-box">
            <h4>HongRuizhen Clone Project</h4>
          </div>
        </div>
      </div>
    );
}

export default HongDetail;