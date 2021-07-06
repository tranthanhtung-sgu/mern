import axios from 'axios'


export const postUser = ({username,password}) => { 
    return axios.post('http://localhost:5000/api/auth/login/', { username, password }) 
}

export const getUsers = () => { 
    return axios.get('http://localhost:5000/api/auth/') 
}

export const postCustomer = ({username,password}) => { 
    return axios.post('http://localhost:5000/api/customers/login/', { username, password }) 
}
