const initialProducts={
    products:[]
}
export const productsReducer=(state=initialProducts,action)=>{
    switch (action.type) {
        case "ADDPRODUCT":
            return [...state.products,{name:"abc",category:"books"}]
            case "REMOVEPRODUCT":
                return state.products.filter((product)=>product.name !== action.paylod)
           
        default:
           return state.products
    }
}