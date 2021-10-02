/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { returnCheckBoxValues } from './utils';
import { useSelector, useDispatch } from "react-redux";
import { handleFilterAction } from './actions';


export const SideNav = () => {
  const [allCheckBoxes, setallCheckBoxes] = useState(returnCheckBoxValues())
  const { users } = useSelector((state) => state.data);
  const [autoSearch,setAutoSearch]= useState([])
  const [searchText ,setSearchText] = useState("")
  const dispatch = useDispatch();

  const handleCheckSelection = (e) => {
    let newCheckboxes = [...allCheckBoxes]
    newCheckboxes.forEach(cb => {
      if (e.target.value === cb.name) {
        cb.isChecked = e.target.checked
      }
    })
    setallCheckBoxes(newCheckboxes)
    dispatch(handleFilterAction(getCheckedValues(newCheckboxes)))
  }

  const getAllSeletedData = (filters)=>{
    let curentData = [...users]
    let filteredData = []
    curentData.forEach(obj=>{
      filters.forEach(filter=>{
          if(obj.subjects.indexOf(filter)>-1){
            let check = filteredData.find(info=> info.id == obj.id)
            if(!check){
              filteredData.push(obj)
            }
          }
      })
    })
    return filteredData
  }

  const getCheckedValues =(newCheckboxes)=>{
    let filters = [];// It will contain String of Array
    newCheckboxes.forEach((cb)=>{
      if(cb.isChecked){
        filters.push(cb.name)
      }
    })
    return getAllSeletedData(filters)
  }
  const selectAll = (e) => {
    let newCheckboxes = [...allCheckBoxes]
    if (e.target.checked) {
      newCheckboxes.forEach(cb => {
        cb.isChecked = true
      })
    } else {
      newCheckboxes.forEach(cb => {
        cb.isChecked = false
      })
    }

    setallCheckBoxes(newCheckboxes)
    dispatch(handleFilterAction(getCheckedValues(newCheckboxes)))

  }

  const handleAutoSearch = (e)=>{
    let newSearch = {...searchText}
    setSearchText(e.target.value)
    if(e.target.value.length>0){
      let filtered=[]
      let autoSearchItems = allCheckBoxes.filter(cb=>
        cb.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >-1
      )
      
      setAutoSearch(autoSearchItems)
    }else{
      setAutoSearch([])
      dispatch(handleFilterAction(getAllSeletedData([])))
    }
    
    
  }

  const handleSerchClick =(searhString)=>{
    setSearchText(searhString)
    dispatch(handleFilterAction(getAllSeletedData([searhString])))
  }
  return (
    <div>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
        <input type="search" name="autoSearch" value={searchText} onChange={(e)=>{handleAutoSearch(e)}} style={{marginLeft:'20px'}}/>
        <ul id="search" style={{marginLeft: '20px',padding: '0px'}}>
          {autoSearch.map((search)=><li style={{cursor:'pointer'}} onClick={()=>{
            handleSerchClick(search.name)
          }}>
            {/* <input type="checkbox" name="" id="" style={{marginRight:'10px'}} /> */}
            {search.name}
            
            </li>)}
        </ul>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <span data-feather="home"></span>
                Skills
              </a>
              <ul style={{ marginLeft: '10px', listStyleType: "none" }}>
                <li>
                  <input type="checkbox" name="all" onChange={(e) => { selectAll(e) }} />
                  <span style={{ marginLeft: '5px', fontWeight: "bold" }}>All Skils</span>
                </li>
                {allCheckBoxes.map(cb => <li>
                  <input type="checkbox" name="CSS" checked={cb.isChecked} value={cb.name} onChange={(e) => {
                    handleCheckSelection(e)
                  }} />
                  <span style={{ marginLeft: '5px' }}>{cb.name}</span>
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
