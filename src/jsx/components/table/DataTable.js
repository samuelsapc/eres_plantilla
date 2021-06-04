import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import { Table, Badge, Dropdown } from "react-bootstrap";

import data from "./tableData.js";

import "../../index.css";
import BasicTable from "./BasicTable";
import ProfileTable from "./ProfileTable";
import FeesCollection from "./FeesCollection";
import PatientTable from "./PatientTable";

const DataTable = () => {
   return (
      <Fragment>
         <PageTitle activeMenu="Datatable" motherMenu="Table" />
         <div className="row">
            <BasicTable />

            <div className="col-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Datatable</h4>
                  </div>
                  <div className="card-body">
                     <Table responsive striped hover className="w-100">
                        <div
                           id="example_wrapper"
                           className="dataTables_wrapper"
                        >
                           <table
                              id="example"
                              className="display w-100 dataTable"
                              role="grid"
                              aria-describedby="example_info"
                           >
                              <thead>
                                 {data.jobsTable.columns.map((d, i) => (
                                    <th key={i}>{d}</th>
                                 ))}
                              </thead>
                              <tbody>
                                 {data.jobsTable.data.map((d, i) => (
                                    <tr
                                       key={i}
                                       className={`${
                                          i % 2 === 0 ? "odd" : "even"
                                       }`}
                                    >
                                       {d.map((da, i) => (
                                          <Fragment key={i}>
                                             {i === 0 ? (
                                                <td className="sorting_1">
                                                   {da}
                                                </td>
                                             ) : (
                                                <td>{da}</td>
                                             )}
                                          </Fragment>
                                       ))}
                                    </tr>
                                 ))}
                              </tbody>
                              <tfoot>
                                 <tr role="row">
                                    {data.jobsTable.columns.map((d, i) => (
                                       <th key={i}>{d}</th>
                                    ))}
                                 </tr>
                              </tfoot>{" "}
                           </table>
                        </div>
                     </Table>
                  </div>
               </div>
            </div>
            <ProfileTable />
            <FeesCollection />
            <PatientTable />
         </div>
      </Fragment>
   );
};

export default DataTable;
