import React from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {Link} from "react-router-dom"
const RegisterForm = () => {
    return (
        <>
       <Form className="my-4">
           <Form.Group>
               <Form.Control className="my-4" type="text" placeholder="Enter your username" name="username" required />
           </Form.Group>

           <Form.Group>
               <Form.Control className="my-4" type="text" placeholder="Enter your password" name="password" required />
           </Form.Group>

           <Form.Group>
               <Form.Control className="my-4" type="text" placeholder="Confirm your password" name="password" required />
           </Form.Group>

            <Button variant="success" type="submit">Login</Button>
        </Form>
        <p>Already have an account</p>
        <Link to="/login">
            <Button variant="info" size="sm" className="ml-2"></Button>
        </Link>
        </>
    )
}

export default RegisterForm
