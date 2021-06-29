import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { getProduct } from '../api/product'
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
    const [product, setProduct] = useState([])
    const classes = useStyles();
    useEffect(() => {
        getProduct(props.id)
            .then(res => setProduct
                (res.data.product))
            .catch(err => console.log(err.message))

        return () => {

        }
    }, [])
    const removeItem = (id) => {
        let arr = sessionStorage.getItem("cart").split(',');
        console.log(id);
        console.log(arr);


        let newArr=arr.filter(item =>
            item !== id
        )
        console.log(newArr);
        sessionStorage.setItem("cart",newArr)
        props.updateCartByDelete(sessionStorage.getItem("cart"))
        // sessionStorage.setItem("cart",arr)
    }
  
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
                            <Typography variant="subtitle1">$19.00</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
