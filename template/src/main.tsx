import React from "react";
import ReactDOM from "react-dom";

import logger from "./logger";
import Root from "./Root";

logger.info("start");

ReactDOM.render(<Root />, document.getElementById("root"));
