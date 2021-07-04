import React from "react";
import reactDom from "react-dom";
import axios from "axios";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/";

reactDom.render(<App />, document.getElementById("root"));
