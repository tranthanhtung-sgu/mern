import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
const CurrencyFormat = require('react-currency-format');
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  child: {
    marginLeft: theme.spacing(50),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}
))

export default function VerticalDividers(props) {
  const [product, setProduct] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${props.id}`).then(res => {
      setProduct(res.data.product)
    }).catch(err=> console.log(err))
  },[])
  const classes = useStyles();
  return (
    <div>
      <Grid container alignItems="center" className={classes.root}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
        {product.name}
        </Paper>
        <Divider className={classes.child} orientation="vertical" flexItem />
        </Grid>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
        {product.price}
        </Paper>
        <Divider className={classes.child} orientation="vertical" flexItem />
        </Grid>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
          {props.id==props.idUpdate?sessionStorage.getItem(props.idUpdate):sessionStorage.getItem(props.id)}
        </Paper>
       <Divider className={classes.child} orientation="vertical" flexItem />
        </Grid>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
          <CurrencyFormat value= {product.price*(sessionStorage.getItem(props.id))}
          prefix="VND"
          displayType="text"
          thousandSeparator={true}
           />
       
        </Paper>
        <Divider className={classes.child} orientation="vertical" flexItem />
        </Grid>
      </Grid>
    </div>

  );
}
