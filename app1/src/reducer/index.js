const initialState={
    users:[ ]
}
export const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "ADDUSER":
            return [...state.users,action.payload]
        case "REMOVEUSER":
            return state.users.filter((user)=>user.fname!==action.payload)
        
        default:
            return state.users
    }
}