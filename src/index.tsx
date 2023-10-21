import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Renderer from "./components/common/Routing";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Renderer />
    <Home />
  </React.StrictMode>
);
