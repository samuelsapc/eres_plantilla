import React from "react";

import Usa from "@svg-maps/usa";
import World from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import PageTitle from "../../../layouts/PageTitle";

const JqvMap = () => {
   // document.querySelector(".content-body").style.minHeight = "1525px";
   return (
      <>
         <PageTitle activeMenu="jqvmap" motherMenu="Map" />

         <div className="row">
            <div className="col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">World Map</h4>
                  </div>
                  <div className="card-body">
                     <div id="world-map">
                        <SVGMap map={World} />
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">USA</h4>
                  </div>
                  <div className="card-body">
                     <div id="usa">
                        <SVGMap map={Usa} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default JqvMap;
