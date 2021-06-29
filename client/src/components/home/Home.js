import React from 'react'
import Navbar from './Navbar'
import Container from './Container'
import Menu from './Menu'
import Cart from './Cart'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Router>
            <Navbar></Navbar>   
            <Switch>
            <Route path="/home/cart"><Cart/></Route>
            <Route path="/"><Menu></Menu></Route>
            </Switch>
            </Router>
        </div>
    )
}

export default Home
