import { returnUser } from "../utils"

const initialState={
    users:[ ],
    selectedUser:returnUser(),
    showModal:false,
    isEdit:false,
    filteredData:[],
    isFilter:false
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
        case "FITER_DATA":
            return {
                ...state,
                filteredData:action.payload,
                isFilter:true
            }
        case "CLEAR_FITER_DATA":
            return {
                ...state,
                isFilter:action.payload,
            }
        default:
            return state
    }
}