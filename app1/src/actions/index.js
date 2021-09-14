import axios from "axios";
let apiUrl = "http://localhost:3000/users/";

export const handleEditAction=(user)=>{
  return {
    type: "EDITUSER",
    payload: user,
}
}
export const showModalAction = (val)=>{
  return {
        type: "SHOWMODAL",
        payload: val,
    }
}
export const addUserAction = (user) => {
  return async (dispatch)=>{
    let addUser = await axios.post(apiUrl,user)
    dispatch(getAllUsersAction())
  }
};

export const removeUserAction = (user) => {
  return async (dispatch)=>{
    let delUser = await axios.delete(apiUrl+user.id)
    dispatch(getAllUsersAction())
  }
};

export const getAllUsersAction =  () => {
  return async (dispatch)=>{
    let allUsers = await axios.get(apiUrl);

    dispatch({
        type: "GETALLUSERS",
        payload: allUsers.data,
    })
  }

};


