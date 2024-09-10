import React, { useEffect } from "react";

import "../../css/scp_detail.scss";
import $ from "jquery";

function ProjectDetail(props) {
  useEffect(() => {
    $(document).mouseup(function (e) {
      let clickwrap = $(".scp-area");
      let movewrap = $(".Scp-detail");
      //   console.log(movewrap);
      if (clickwrap.has(e.target).length == 0) {
        movewrap.hide();
      }
    });
  });
  return (
    <div id="Scp-detail" className="Scp-detail">
      <div className="scp-area">
        <div className="scp-detail-box">
          <h4>Shoppingmall Clone Project</h4>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
