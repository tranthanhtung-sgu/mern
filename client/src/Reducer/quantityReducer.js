const initialState={
    count:sessionStorage.getItem("cart")?sessionStorage.getItem("cart").split(',').length:'0'};


const quantityReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ONE":
        
        case "SWIMMING":
          
        default:
            return {
                count:action.payload
            }
    }
}
export default quantityReducer
