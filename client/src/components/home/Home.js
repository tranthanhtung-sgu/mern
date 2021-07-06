import React from 'react'
import Navbar from './Navbar'
import DetailProduct from './DetailProduct'
import Menu from './Menu'
import Cart from './Cart/Cart'
import Banner from '../Banner/Banner'
import {useHistory} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
const Home = () => {
    const history = useHistory()
    return (
        <div>
            <Router>
                <Navbar history={history}></Navbar>

                <Switch>
                    <Route path="/home/cart"><Cart /></Route>
                   
                    <Route path="/home/detail-product">
                        <DetailProduct></DetailProduct>
                    </Route>
                    <Route path="/">
                        <Banner></Banner>
                        <Menu></Menu>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Home
