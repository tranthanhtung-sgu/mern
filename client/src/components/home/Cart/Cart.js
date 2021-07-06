import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Item from './ItemCart'
import Statictical from '../Statictical'
import { getProducts } from '../../api/product'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const [itemsCart, setItemsCart] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        setItemsCart(sessionStorage.getItem("cart") ? sessionStorage.getItem("cart").split(',') : []);
        getProducts().then(res => setProducts(res.data.products)).catch(err => console.log(err.message))
        return () => {

        }
    }, [sessionStorage.getItem("cart")])

    const classes = useStyles();
    const updateCartByDelete = (items) => {
        setItemsCart(items.split(','))

    }
  const hihihi=sessionStorage.getItem("cart").split(',').map(item=>products.find(itemP=>itemP._id===item))
    console.log(hihihi);
 
    return (
        <div className={classes.root}>
            {/* <Statictical></Statictical> */}
            <Grid container spacing={3}>
                {[...new Set(itemsCart)].map(item => {
                    return (
                        <Grid item xs={6}>
                            <Item updateCartByDelete={updateCartByDelete} id={item}></Item>
                        </Grid>)
                })}

            </Grid>
        </div>
    );
}
