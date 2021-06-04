import React, { useState, useRef, useEffect, Fragment } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "./tableData.js";

const ProfileTable = () => {
   const [dataAll, setData] = useState(
      document.querySelectorAll("#profile_table tbody tr")
   );
   const sort = 5;
   const activePag = useRef(0);
   const [test, settest] = useState(0);

   // Active data
   const chageData = (frist, sec) => {
      for (var i = 0; i < dataAll.length; ++i) {
         if (i >= frist && i < sec) {
            dataAll[i].classList.remove("d-none");
         } else {
            dataAll[i].classList.add("d-none");
         }
      }
   };
   // use effect
   useEffect(() => {
      setData(document.querySelectorAll("#profile_table tbody tr"));
   }, [test]);

   // Active pagginarion
   activePag.current === 0 && chageData(0, sort);
   // paggination
   let paggination = Array(Math.ceil(dataAll.length / sort))
      .fill()
      .map((_, i) => i + 1);

   // Active paggination & chage data
   const onClick = (i) => {
      activePag.current = i;
      chageData(activePag.current * sort, (activePag.current + 1) * sort);
      settest(i);
   };

   return (
      <div className="col-12">
         <div className="card">
            <div className="card-header">
               <h4 className="card-title">Profile Datatable</h4>
            </div>
            <div className="card-body">
               <Table responsive striped hover className="w-100">
                  <div className="dataTables_wrapper">
                     <table
                        id="profile_table"
                        className="display w-100 dataTable"
                     >
                        <thead>
                           <tr role="row">
                              {data.profileTable.columns.map((d, i) => (
                                 <th key={i}>{d}</th>
                              ))}
                           </tr>
                        </thead>
                        <tbody>
                           {data.profileTable.data.map((d, i) => (
                              <tr
                                 key={i}
                                 className={`${i % 2 === 0 ? "odd" : "even"}`}
                              >
                                 {d.map((da, i) => (
                                    <Fragment key={i}>
                                       <Fragment>
                                          {i === 0 ? (
                                             <td className="sorting_1">
                                                <img
                                                   className="rounded-circle "
                                                   width="35"
                                                   src={da}
                                                   alt
                                                />
                                             </td>
                                          ) : (
                                             <td>
                                                {da}
                                                {i === 8 && (
                                                   <div className="d-flex">
                                                      <Link
                                                         to="#"
                                                         className="btn btn-primary shadow btn-xs text-white sharp mr-1"
                                                      >
                                                         <i className="fa fa-pencil"></i>
                                                      </Link>
                                                      <Link
                                                         to="#"
                                                         className="btn btn-danger shadow btn-xs text-white sharp"
                                                      >
                                                         <i className="fa fa-trash"></i>
                                                      </Link>
                                                   </div>
                                                )}
                                             </td>
                                          )}
                                       </Fragment>
                                    </Fragment>
                                 ))}
                              </tr>
                           ))}
                        </tbody>
                     </table>
                     <div className="d-sm-flex text-center align-items-center justify-content-between">
                        <div className="dataTables_info">
                           Showing {activePag.current * sort + 1} to{" "}
                           {dataAll.length > (activePag.current + 1) * sort
                              ? (activePag.current + 1) * sort
                              : dataAll.length}{" "}
                           of {dataAll.length} entries
                        </div>
                        <div
                           className="dataTables_paginate paging_simple_numbers"
                           id="example_paginate"
                        >
                           <Link
                              className="paginate_button previous disabled"
                              to="/table-datatable-basic"
                              onClick={() =>
                                 activePag.current > 0 &&
                                 onClick(activePag.current - 1)
                              }
                           >
                              Previous
                           </Link>
                           <span>
                              {paggination.map((number, i) => (
                                 <Link
                                    key={i}
                                    to="/table-datatable-basic"
                                    className={`paginate_button  ${
                                       activePag.current === i ? "current" : ""
                                    } ${i > 0 ? "ml-1" : ""}`}
                                    onClick={() => onClick(i)}
                                 >
                                    {number}
                                 </Link>
                              ))}
                           </span>
                           <Link
                              className="paginate_button next"
                              to="/table-datatable-basic"
                              onClick={() =>
                                 activePag.current + 1 < paggination.length &&
                                 onClick(activePag.current + 1)
                              }
                           >
                              Next
                           </Link>
                        </div>
                     </div>
                  </div>
               </Table>
            </div>
         </div>
      </div>
   );
};

export default ProfileTable;
