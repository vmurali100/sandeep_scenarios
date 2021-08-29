const initialState={
    users:[
        {
            "fname": "Kerrissa",
            "lname": "Stilwell"
        },
        {
            "fname": "Mario",
            "lname": "Ellingwood"
        },
        {
            "fname": "Sharad",
            "lname": "Marton"
        },
        {
            "fname": "Juan",
            "lname": "Bryson"
        }
    ]
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