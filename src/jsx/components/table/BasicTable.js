import React, { useState, useRef, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const BasicTable = () => {
   const [data, setData] = useState(
      document.querySelectorAll("#job_data tbody tr")
   );
   const sort = 5;
   const activePag = useRef(0);
   const [test, settest] = useState(0);

   // Active data
   const chageData = (frist, sec) => {
      for (var i = 0; i < data.length; ++i) {
         if (i >= frist && i < sec) {
            data[i].classList.remove("d-none");
         } else {
            data[i].classList.add("d-none");
         }
      }
   };
   // use effect
   useEffect(() => {
      setData(document.querySelectorAll("#job_data tbody tr"));
   }, [test]);

   // Active pagginarion
   activePag.current === 0 && chageData(0, sort);
   // paggination
   let paggination = Array(Math.ceil(data.length / sort))
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
               <h4 className="card-title">Basic Datatable</h4>
            </div>
            <div className="card-body">
               <div className="dataTables_wrapper">
                  <Table
                     responsive
                     striped
                     hover
                     id="job_data"
                     className="dataTable text-black"
                  >
                     <thead>
                        <tr>
                           <th className="sorting_asc">Name</th>
                           <th className="sorting">Position</th>
                           <th className="sorting">Office</th>
                           <th className="sorting">Age</th>
                           <th className="sorting">Start date</th>
                           <th className="sorting">Salary</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr className="odd">
                           <td className="sorting_1">Airi Satou</td>
                           <td>Accountant</td>
                           <td>Tokyo</td>
                           <td>33</td>
                           <td>2008/11/28</td>
                           <td>$162,700</td>
                        </tr>
                        <tr className="even">
                           <td className="sorting_1">Angelica Ramos</td>
                           <td>Chief Executive Officer (CEO)</td>
                           <td>London</td>
                           <td>47</td>
                           <td>2009/10/09</td>
                           <td>$1,200,000</td>
                        </tr>
                        <tr className="odd">
                           <td className="sorting_1">Ashton Cox</td>
                           <td>Junior Technical Author</td>
                           <td>San Francisco</td>
                           <td>66</td>
                           <td>2009/01/12</td>
                           <td>$86,000</td>
                        </tr>
                        <tr className="even">
                           <td className="sorting_1">Bradley Greer</td>
                           <td>Software Engineer</td>
                           <td>London</td>
                           <td>41</td>
                           <td>2012/10/13</td>
                           <td>$132,000</td>
                        </tr>
                        <tr className="odd">
                           <td className="sorting_1">Brenden Wagner</td>
                           <td>Software Engineer</td>
                           <td>San Francisco</td>
                           <td>28</td>
                           <td>2011/06/07</td>
                           <td>$206,850</td>
                        </tr>
                        <tr className="even">
                           <td className="sorting_1">Brielle Williamson</td>
                           <td>Integration Specialist</td>
                           <td>New York</td>
                           <td>61</td>
                           <td>2012/12/02</td>
                           <td>$372,000</td>
                        </tr>
                        <tr className="odd">
                           <td className="sorting_1">Bruno Nash</td>
                           <td>Software Engineer</td>
                           <td>London</td>
                           <td>38</td>
                           <td>2011/05/03</td>
                           <td>$163,500</td>
                        </tr>
                        <tr className="even">
                           <td className="sorting_1">Caesar Vance</td>
                           <td>Pre-Sales Support</td>
                           <td>New York</td>
                           <td>21</td>
                           <td>2011/12/12</td>
                           <td>$106,450</td>
                        </tr>
                        <tr className="odd">
                           <td className="sorting_1">Cara Stevens</td>
                           <td>Sales Assistant</td>
                           <td>New York</td>
                           <td>46</td>
                           <td>2011/12/06</td>
                           <td>$145,600</td>
                        </tr>
                        <tr className="even">
                           <td className="sorting_1">Cedric Kelly</td>
                           <td>Senior Javascript Developer</td>
                           <td>Edinburgh</td>
                           <td>22</td>
                           <td>2012/03/29</td>
                           <td>$433,060</td>
                        </tr>
                     </tbody>
                     <tfoot>
                        <tr>
                           <th>Name</th>
                           <th>Position</th>
                           <th>Office</th>
                           <th>Age</th>
                           <th>Start date</th>
                           <th>Salary</th>
                        </tr>
                     </tfoot>
                  </Table>
                  <div className="d-sm-flex text-center align-items-center justify-content-between">
                     <div
                        className="dataTables_info"
                        id="example_info"
                        role="status"
                        aria-live="polite"
                     >
                        Showing {activePag.current * sort + 1} to{" "}
                        {data.length > (activePag.current + 1) * sort
                           ? (activePag.current + 1) * sort
                           : data.length}{" "}
                        of {data.length} entries
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
            </div>
         </div>
      </div>
   );
};

export default BasicTable;
