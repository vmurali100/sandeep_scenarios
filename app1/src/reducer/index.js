const initialState={
    users:[ ],
    selectedUser:{},
    showModal:false
}
export const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "ADDUSER":
            return [...state.users,action.payload]

        case "REMOVEUSER":
            return state.users.filter((user)=>user.fname!==action.payload)

        case "GETALLUSERS":
            return {...state,users:action.payload}

        case "SHOWMODAL":
            return {...state,showModal:action.payload}

        case "EDITUSER":
            return {...state,selectedUser:action.payload}
        default:
            return state
    }
}