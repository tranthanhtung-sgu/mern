import React from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {Link} from "react-router-dom"
import {useState,useContext} from 'react'
import {AuthContext} from '../contexts/AuthContext'
const LoginForm = () => {
   const [loginForm, setLoginForm] = useState({
       username:'',
       password:''
       }
   )
  const {username,password}=loginForm
   //khi người dùng nhập vào sẽ thay đổi
   const onChangeLoginForm=event=>setLoginForm({...loginForm,[event.target.name]:event.target.value})
    return (
        <>
       <Form className="my-4">
           <Form.Group>
               <Form.Control className="my-4" type="text" placeholder="enter your username" name="username" required 
               value={username}
               onChange={onChangeLoginForm}
               />
           </Form.Group>

           <Form.Group>
               <Form.Control className="my-4" type="text" placeholder="enter your password" name="password" required
                value={username}
                onChange={onChangeLoginForm}
               />
           </Form.Group>

            <Button variant="success" type="submit">Login</Button>
        </Form>
        <p>Don't have an account</p>
        <Link to="/register">
            <Button variant="info" size="sm" className="ml-2"></Button>
        </Link>
        </>
    )
}

export default LoginForm
