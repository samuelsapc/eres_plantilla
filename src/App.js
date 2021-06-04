import React, { Fragment } from "react";
import Markup from "./jsx";

/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";
import { withResizeDetector } from "react-resize-detector";

const App = ({ width }) => {
   const body = document.querySelector("body");
   const contentBody = document.getElementsByClassName("content-body");

   width >= 1300
      ? body.setAttribute("data-sidebar-style", "full")
      : body.setAttribute("data-sidebar-style", "overlay");
   // contentBody.style.minHeight = `${Math.round(height)}px`;

   return (
      <Fragment>
         <Markup />
      </Fragment>
   );
};

export default withResizeDetector(App);
