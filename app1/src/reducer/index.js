import { returnUser } from "../utils"

const initialState={
    users:[ ],
    selectedUser:returnUser(),
    showModal:false,
    isEdit:false,
    filteredData:[],
    isFilter:false,
    noOfPages:1,
    noOfRecords:5,
    pageNo :1
}
export const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "ADDUSER":
            return [...state.users,action.payload]

        case "REMOVEUSER":
            return state.users.filter((user)=>user.fname!==action.payload)

        case "GETALLUSERS":
            console.log("action.payload",action.payload)
            return {...state,
                users:action.payload,
                showModal:false,
                noOfPages:Math.ceil(action.payload.length/initialState.noOfRecords)
            }

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
        case "PAGINATION":
            return {
                ...state,
                pageNo:action.payload
            }
        default:
            return state
    }
}