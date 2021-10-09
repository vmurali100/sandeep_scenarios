import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllUsersAction,
  handleEditAction,
  handleFilterAction,
  pagenationAction,
  removeUserAction,
  showModalAction,
} from "./actions";
import { SideNav } from "./SideNav";

export const Dashboard = () => {
  const { users, filteredData, isFilter,noOfPages,noOfRecords,pageNo } = useSelector((state) => state.data);
  console.log(noOfRecords);
  console.log(noOfPages);
  const dispatch = useDispatch();
  const getAllUsers = () => {
    dispatch(getAllUsersAction());
  };
  useEffect(() => {
    getAllUsers();
  }, []);


  const handleEdit = (user) => {
    let editUser = { user };
    editUser["showModal"] = true;
    editUser["isEdit"] = true;
    dispatch(handleEditAction(editUser));
  };

  const handleDelete = (user) => {
    dispatch(removeUserAction(user));
  };

  const gotoPage=(page)=>{
    let allUsers = users.slice((page*noOfRecords-noOfRecords),page*noOfRecords)
    dispatch(handleFilterAction(allUsers))
    dispatch(pagenationAction(page))
  }

  const getPageNos=()=>{
    let i=1
    let pages =[]
    while (i<=noOfPages) {
       pages.push(i)
       i++
    }
    return pages.map((page)=> <li className="page-item"><a href="#" className={`page-link ${pageNo==page ? 'pageActive':''}`} onClick={()=>{gotoPage(page)}}>{page}</a></li> )
  }


  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Password</th>
                    <th>State</th>

                    <th>Date</th>
                    <th>Gender</th>

                    <th>Skills</th>
                    <th>Id</th>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>
                  {users && !isFilter
                    ? users.map((user, i) => i < noOfRecords && (
                      <tr>
                        {Object.values(user).map((val) => (
                          <td>{val}</td>
                        ))}
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              handleEdit(user);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              handleDelete(user);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                    : filteredData.map((fuser) => (
                        <tr>
                          {Object.values(fuser).map((val) => (
                            <td>{val}</td>
                          ))}
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                handleEdit(fuser);
                              }}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                handleDelete(fuser);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                   
                    <button className="page-link" disabled={pageNo==1} onClick={()=>{gotoPage(pageNo-1)}}>Previous</button>
                  </li>
                  {getPageNos()}
                  <li className="page-item">
                  <button className={`page-link ${pageNo == noOfPages ? 'disabled':''}`} disabled={pageNo == noOfPages} onClick={()=>{gotoPage(pageNo+1)}}>Next</button>

                   
                  </li>
                </ul>
              </nav>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
