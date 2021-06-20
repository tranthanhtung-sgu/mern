import {createContext,useReducer} from 'react'
import axios from 'axios'
import {authReducer} from "../reducer/authReducer"
import {apiURL,LOCAL_STORAGE_TOKEN_NAME} from "./constants"
export const AuthContext=createContext()

const AuthContextProvider=({children})=>{
    const [authState,dispatch]= useReducer(authReducer,{
        authLoading:true,
        Authenticate:false,
        user:null
    })

//login
const loginUser=async userForm=>{
    try{
        const response=await axios.post(`${apiURL}/auth/login`);
        if(response.data.success){
            localStorage.set(LOCAL_STORAGE_TOKEN_NAME,response.data.accessToken)
        }
        return response.data;
    }catch(error){
        if(error.response.data){
            return error.response.data;
        }
        else
        return {success:false,message:"loi roi"}
    }
}
//Context data xuat khai loginUser
const AuthContextData={loginUser}

//return provider
return (
    <AuthContextProvider value={AuthContextData}>
        {children}
    </AuthContextProvider>
)
}
export default AuthContextProvider