import { returnUser } from "../utils"

const initialState={
    users:[ ],
    selectedUser:returnUser(),
    showModal:false,
    isEdit:false
}
export const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "ADDUSER":
            return [...state.users,action.payload]

        case "REMOVEUSER":
            return state.users.filter((user)=>user.fname!==action.payload)

        case "GETALLUSERS":
            return {...state,users:action.payload,showModal:false}

        case "SHOWMODAL":
            return {...state,showModal:action.payload}

        case "EDITUSER":
            return {...state,
                selectedUser:action.payload.user,
                showModal:action.payload.showModal,
                isEdit:action.payload.isEdit}
        case "ISEDIT":
            return {...state,
                isEdit:action.payload
            }
        default:
            return state
    }
}