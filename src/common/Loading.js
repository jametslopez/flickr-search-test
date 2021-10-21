import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export const Loading = (props) => {
  if (props.show) {
    return (
      <div className="text-red-500 text-sm flex items-center">
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="fa-spin fa-2x"
          color="red"
        />{" "}
        <span className="ml-2">loading</span>
      </div>
    );
  } else {
    return "";
  }
};
