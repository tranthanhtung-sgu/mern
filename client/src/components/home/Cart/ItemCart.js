import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { getProduct, getProducts } from '../../api/product'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid(props) {
    //Sum Quantity
    const [quantity, setQuantity] = useState(sessionStorage.getItem(props.id))
    console.log(quantity);
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    const [products, setProducts] = useState([])
    const classes = useStyles();
    useEffect(() => {
        //get SP
        getProduct(props.id)
            .then(res => setProduct
                (res.data.product))
            .catch(err => console.log(err.message))
        //Get ALL PRODUCT
        getProducts()
            .then(res => setProducts
                (res.data.products))
            .catch(err => console.log(err.message))

        return () => {

        }
    }, [])


    const removeItem = (id) => {
        sessionStorage.setItem(id, 0)// Asign id in session = 0
        let arr = sessionStorage.getItem("cart").split(',');//Get Array Cart in Session
        let newArr = arr.filter(item =>
            item !== id)
     

        sessionStorage.setItem("cart", newArr)
        props.updateCartByDelete(sessionStorage.getItem("cart"))// re-render itemCart in Cart
        if (newArr.length === 0) {//Redux update quantity in icon Cart
            dispatch({
                type: "hi",
                payload: 0
            })
        }
        else
            dispatch({
                type: "hi",
                payload: sessionStorage.getItem("cart").split(',').length
            })
    }

    const increaseQuanity = (id) => {
        //Update Session Quantity for every id
        sessionStorage.setItem(id, Number(sessionStorage.getItem(id)) + 1)
        //Set Quantity in Button increase / decrease
        setQuantity(sessionStorage.getItem(id))
        //Create new array includes old item and one new item
        let arr = sessionStorage.getItem("cart").split(',')
        arr.splice(0, 0, id)
        //Asign new array into session Cart
        sessionStorage.setItem("cart", arr)

        dispatch({
            type: "hi",
            payload: sessionStorage.getItem("cart").split(',').length
        })

    }

    const decreaseQuanity = (id) => {
        //Update Session Quantity for every id
        if (sessionStorage.getItem(id) === '1') {
            alert("Don't set quanity <1");
        }
        else {
            sessionStorage.setItem(id, Number(sessionStorage.getItem(id)) - 1)
            //Set Quantity in Button increase / decrease
            setQuantity(sessionStorage.getItem(id))
            console.log(quantity, 'qtt');
            console.log(sessionStorage.getItem(id), 'sstr');
            //Create new array includes old item and one new item
            let arr = sessionStorage.getItem("cart").split(',');//Get Array Cart in Session
            arr.splice(arr.find(item => item === id), 1);
            //Asign new array into session Cart
            sessionStorage.setItem("cart", arr)
            dispatch({
                type: "hi",
                payload: sessionStorage.getItem("cart").split(',').length
            })
        }


    }

    const CurrencyFormat = require('react-currency-format');

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={product.img} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {product.screen}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography onClick={() => removeItem(props.id)} variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Typography variant="subtitle1"><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'VND'} /></Typography>
                            <ButtonBase className={classes.image}>
                                <Typography style={{ marginTop: "50px" }} variant="subtitle1">
                                    <Button onClick={() => increaseQuanity(props.id)}>+</Button>
                                    <Paper >{quantity}</Paper>
                                    <Button onClick={() => decreaseQuanity(props.id)}>-</Button>
                                </Typography>
                            </ButtonBase>
                        </Grid>



                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
