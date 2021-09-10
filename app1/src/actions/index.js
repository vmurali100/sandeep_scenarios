import axios from "axios";
let apiUrl = "http://localhost:3000/users";
export const addUserAction = (users) => {};

export const removeUserAction = () => {};

export const getAllUsersAction =  () => {
  return async (dispatch)=>{
    let allUsers = await axios.get(apiUrl);

    dispatch({
        type: "GETALLUSERS",
        payload: allUsers.data,
    })
  }
//   console.log(allUsers)
//   return {
    // type: "GETALLUSERS",
    // payload: allUsers,
//   };
};
