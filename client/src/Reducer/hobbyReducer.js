const initialState=sessionStorage.getItem("cart");


const hobbyReducer=(state=initialState,action)=>{
    switch(action.type){
        case "UPDATE":
            const newList=state.list.concat(action.payload);
       
            return ({...state,
                list:newList
            })
        case "SWIMMING":
            return state
        default:
            return state
    }
}
export default hobbyReducer
