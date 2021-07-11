const initialState={
    count:0};


const quantityReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ONE":
            return {
                count:action.payload
            }
        case "SWIMMING":
          
        default:
            return {
                count:action.payload
            }
    }
}
export default quantityReducer
