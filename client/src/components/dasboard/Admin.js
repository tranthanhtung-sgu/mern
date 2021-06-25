import React, { useState, useEffect } from 'react';

import MyCard from './MyCard'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import axios from 'axios'
import { url } from './Const'
import { useHistory } from 'react-router-dom'
//LisstBox
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Admin() {
    const classes = useStyles();





    //Products
    const [brands, setBrands] = useState([])

    const [products, setProducts] = useState([])
    // GET ALL PRODUCT
    useEffect(() => {
        axios.get(`${url}/products`).then((res) => {
            setProducts(res.data.products);
        }).catch((err) => {
            console.log(err, "loi cmnr")
        })
        axios.get(`${url}/brands`).then((res) => {
            setBrands(res.data.brands);
            console.log(res.data.brands)
        }).catch((err) => {
            console.log(err, "loi cmnr")
        })
        
    },[])

    const handleClick = (e) => {
        console.log(e)
    }
    //history
    let history = useHistory()


    //updateProduct
    const updateProduct = (newList) => {
        setProducts(newList);
        console.log("update o dasboear")
    }
    const reUpdate = () => {
        axios.get(`${url}/products`).then((res) => {
            setProducts(res.data.products);
        }).catch((err) => {
            console.log(err, "loi cmnr")
        })
    }

    const addItem = () => {
        history.push('/add')
    }

    const fixBrands = [
        {
          value: 'iphone',
          label: 'Iphone',
        },
        {
          value: 'samsung',
          label: 'Samsung',
        },
        {
          value: 'huawei',
          label: 'Huawei',
        },
        {
          value: 'oppo',
          label: 'Oppo',
        },
      ];
      

    const [brand, setBrand] = React.useState('EUR');

    const handleChange = (event) => {
      setBrand(event.target.value);
    };
    return (

        <Container maxWidth="lg" className={classes.container}>

            <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={brand}
                onChange={handleChange}
                helperText="Please select your brand"
                fullWidth
            >
                {brands.map((brand) => (
                    <MenuItem key={brand.name} value={brand.description}>
                        {brand.description}
                    </MenuItem>
                ))}
            </TextField>

            <Button
                onClick={addItem}
                type="submit"
                fullWidth
                variant="contained"
                color=""
                className={classes.submit}
            >
                <h2>Add Item</h2>
            </Button>
            <Grid container spacing={3}>
                {products.map((product) => {
                    const { _id, name, screen, cpu, ram, rom, img } = product;
                    return (
                        <Grid item xs={3}>
                            <Paper className={classes.paper} onClick={handleClick}>
                                <MyCard updateProduct={updateProduct} id={_id} name={name} screen={screen} cpu={cpu} ram={ram} rom={rom} img={img}></MyCard>
                            </Paper>
                        </Grid>
                    )
                })}

            </Grid>
        </Container>

    );
}
