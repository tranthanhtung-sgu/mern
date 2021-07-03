import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { getProduct, getProducts } from '../api/product'
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
    const [sumQuantity, setSumQuantity] = useState(sessionStorage.getItem("cart").split(',').length)
    const [quantity, setQuantity] = useState(sessionStorage.getItem(props.id))
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
            console.log("trong return")
        }
    }, [])


    const removeItem = (id) => {
        sessionStorage.setItem(id,0)
        let arr = sessionStorage.getItem("cart").split(',');
        let newArr = arr.filter(item =>
            item !== id
        )

        sessionStorage.setItem("cart", newArr)
        props.updateCartByDelete(sessionStorage.getItem("cart"))
        if (newArr.length === 0) {
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
        console.log(sessionStorage.getItem("cart").split(',').length);
        // sessionStorage.setItem("cart",arr)
    }

    const increaseQuanity = (id) => {
        sessionStorage.setItem(id,
            Number(sessionStorage.getItem(id)) + 1)
        setQuantity(sessionStorage.getItem(id))


        let arr = sessionStorage.getItem("cart").split(',')
        arr.splice(0, 0, id)
        sessionStorage.setItem("cart", arr)
        setSumQuantity(arr.length)
        dispatch({
            type: "hi",
            payload: sessionStorage.getItem("cart").split(',').length
        })

    }

    const decreaseQuanity = (id) => {
        //Giam QuantityID sessionStorage
        sessionStorage.setItem(id, Number(sessionStorage.getItem(id)) - 1)
        setQuantity(sessionStorage.getItem(id))
        if (sessionStorage.getItem(id) === '0') {
            removeItem(id);
            console.log("hiohi");
        }
        //Find index of product will be delete
        let index = sessionStorage.getItem("cart").split(',').findIndex(item => item == id);
        let arr = sessionStorage.getItem("cart").split(',');
        arr.splice(index, 1);

        sessionStorage.setItem('cart', arr);
        setSumQuantity(arr.length)

        // let hihi=sessionStorage.getItem("cart").split(',').map((item)=>{
        //     return products.find(itemP=>itemP._id===item).quantity
        // })

        dispatch({
            type: "hi",
            payload: sessionStorage.getItem("cart").split(',').length
        })
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
