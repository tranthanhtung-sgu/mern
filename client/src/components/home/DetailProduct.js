import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import Commnent from './Comment'
const useStyles = makeStyles((theme) => ({
    word: {
        fontSize: 30,
        color: "black"
    },
    img: {
        border: "5px solid black ",
        borderRadius: "50%"
    },
    font: {
        textDecoration: 'underline overline #FF3028'
    },
    margin: {
        marginTop:'100px',
        marginLeft: '100px',

    },
    textfield: {
        width: '500px'
    }
}))
const DetailProduct = (props) => {
    const localtion = useLocation()
    const classes = useStyles();
    const product = localtion.state.product


    return (
        <div>
            <Grid container spacing={3} className={classes.word}>
                <Grid item xs={6}>
                    <img className={classes.img} src={product.img} />
                </Grid>
                <Grid container item xs={6}   >
                    <Grid className={classes.font} item xs={6} >
                        <p>Name</p>
                        <p>Screen</p>
                        <p>CPU</p>
                        <p>RAM</p>
                        <p>ROM</p>

                    </Grid>
                    <Grid item xs={6}>
                        <p>{product.name}</p>
                        <p>{product.screen}</p>
                        <p>{product.cpu}</p>
                        <p>{product.ram}</p>
                        <p>{product.rom}</p>
                    </Grid>
                </Grid>
                <Grid xs={12}>
                    <Commnent></Commnent>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField className={classes.textfield} id="input-with-icon-grid" label="Commnent" />
                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <SendIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default DetailProduct
