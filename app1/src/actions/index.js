import axios from "axios";
let apiUrl = "http://localhost:3000/users/";

export const handleEditAction = (userObj) => {
  return {
    type: "EDITUSER",
    payload: userObj,
  }
}
export const showModalAction = (val) => {
  return {
    type: "SHOWMODAL",
    payload: val,
  }
}
export const addUserAction = (user) => {
  return async (dispatch) => {
    let addUser = await axios.post(apiUrl, user)
    dispatch(getAllUsersAction())
  }
};

export const removeUserAction = (user) => {
  return async (dispatch) => {
    let delUser = await axios.delete(apiUrl + user.id)
    dispatch(getAllUsersAction())
  }
};

export const getAllUsersAction = () => {
  return async (dispatch) => {
    let allUsers = await axios.get(apiUrl);

    dispatch({
      type: "GETALLUSERS",
      payload: allUsers.data,
    })
  }

};

export const isEditAction = (val) => {
  return {
    type: "ISEDIT",
    payload: val,
  }
}

export const handleUpdateAction = (user) => {
  return async (dispatch) => {
    let addUser = await axios.put(`${apiUrl + user.id}`, user)
    dispatch(getAllUsersAction())
  }
}

export const handleFilterAction=(users)=>{
  return {
    type:"FITER_DATA",
    payload:users,
    }
}

export const clearCheckSearchAction=()=>{
  return {
    type:"CLEAR_FITER_DATA",
    payload:false
  }
}