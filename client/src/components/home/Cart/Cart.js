import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Item from './ItemCart'
import InputPrice from './InputPrice'
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
    const [quantity, setQuantity] = useState(0)
    const [quantityUpdate, setQuantityUpdate] = useState(0)
    const [idUpdate, setIdUpdate] = useState('')
    const [itemsCart, setItemsCart] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        setItemsCart(sessionStorage.getItem("cart") ? sessionStorage.getItem("cart").split(',').filter((item, index) => {
            return sessionStorage.getItem("cart").split(',').indexOf(item) === index
        }) : []);
        getProducts().then(res => setProducts(res.data.products)).catch(err => console.log(err.message))
        return () => {

        }
    },[])
    const classes = useStyles();
    const updateCartByDelete = (items) => {
        console.log('====================================');
        console.log(items,"child to pareent");
        console.log('====================================');
        setItemsCart(items)
        console.log(itemsCart,"sau setstate")
    }
    const updateIncreaseDecrease=(id,quantity)=>{
        setIdUpdate(id)
        setQuantityUpdate(quantity)
    }

    return (

        <div  className={classes.root}>
            {console.log(itemsCart)}
             <InputPrice idUpdate={idUpdate} quantityUpdate={quantity} idProducts={itemsCart}></InputPrice>
            <Grid container spacing={3}>
                { itemsCart.map(id => 
                        (<Grid item xs={6}>
                            <Item 
                            updateIncreaseDecrease ={updateIncreaseDecrease}
                            updateCartByDelete={updateCartByDelete} id={id}></Item>
                        </Grid>)
                )}

            </Grid>
        </div>
    );
}
