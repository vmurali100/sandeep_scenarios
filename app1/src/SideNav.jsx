/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import { returnCheckBoxValues } from './utils';
import { useSelector, useDispatch } from "react-redux";


export const SideNav = () => {
    const [allCheckBoxes, setallCheckBoxes] = useState(returnCheckBoxValues())
    const {users} = useSelector((state) => state.data);
    console.log(users)
    console.log(allCheckBoxes)

    const handleCheckSelection=(e)=>{
        console.log(e.target.value);
        let newCheckboxes = [...allCheckBoxes]
        newCheckboxes.forEach(cb=>{
            if(e.target.value === cb.name){
                cb.isChecked=e.target.checked
               
            }
        })

        setallCheckBoxes(newCheckboxes)
        // let filteredData = []
        let curentData =  [...users]
        let filteredData =  curentData.filter((user)=>{
           console.log(user.subjects)
           console.log(newCheckboxes)
        })

        console.log(filteredData)
    }

    const selectAll=(e)=>{
        let newCheckboxes = [...allCheckBoxes]
        if(e.target.checked){
            newCheckboxes.forEach(cb=>{
                cb.isChecked=true
            })
        }else{
            newCheckboxes.forEach(cb=>{
                cb.isChecked=false
            })
        }

        setallCheckBoxes(newCheckboxes)
    }
    return (
        <div>
             <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <span data-feather="home"></span>
                    Skills
                  </a>
                  <ul style={{marginLeft:'10px', listStyleType:"none"}}>
                      <li>
                          <input type="checkbox" name="all" onChange={(e)=>{selectAll(e)}} />
                          <span style={{marginLeft:'5px',fontWeight:"bold"}}>All Skils</span>
                      </li>
                      {allCheckBoxes.map(cb=> <li>
                      <input type="checkbox" name="CSS" checked={cb.isChecked} value={cb.name} onChange={(e)=>{
                          handleCheckSelection(e)
                      }}/>
                      <span style={{marginLeft:'5px'}}>{cb.name}</span>
                    </li>
                    )}
                    </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file"></span>
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="users"></span>
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="layers"></span>
                    Integrations
                  </a>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a
                  className="link-secondary"
                  href="#"
                  aria-label="Add a new report"
                >
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>

         
        </div>
    )
}
