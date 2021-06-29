import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Item from './ItemCart'
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
    const [itemsCart,setItemsCart]=useState([])
    useEffect(() => {
        setItemsCart(sessionStorage.getItem("cart") ? sessionStorage.getItem("cart").split(','):[]);
        return () => {
           
        }
    }, [sessionStorage.getItem("cart")])
       
    const classes = useStyles();
    const updateCartByDelete=(items)=>{
        setItemsCart(items.split(','))
        
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {itemsCart.map(item => {
                    return (
                        <Grid item xs={6}>
                            <Item updateCartByDelete={updateCartByDelete} id={item}></Item>
                        </Grid>)
                })}

            </Grid>
        </div>
    );
}
