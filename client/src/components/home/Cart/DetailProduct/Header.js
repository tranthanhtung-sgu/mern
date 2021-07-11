import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

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
    marginTop: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: 'black',
    fontWeight: "bold",
    backgroundColor:"gray"
  },
}
))

export default function VerticalDividers(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container alignItems="center" className={classes.root}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
        Name
        </Paper>
        <Divider className={classes.child} orientation="vertical" flexItem />
        </Grid>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
        Price
        </Paper>
        <Divider className={classes.child} orientation="vertical" flexItem />
        </Grid>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
        Quantity
        </Paper>
       <Divider className={classes.child} orientation="vertical" flexItem />
        </Grid>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
        Price ...
        </Paper>
        <Divider className={classes.child} orientation="vertical" flexItem />
        </Grid>
      </Grid>
    </div>

  );
}
