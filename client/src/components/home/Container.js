import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
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

export default function CenteredGrid(props) {
    const classes = useStyles();
    //GET PRODUCT


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
               
                    {props.products.map((product) => {
                        return (
                            <Grid item xs={3}>
                            <Paper elevation={3} className={classes.paper}>
                                <Card product={product}></Card>
                            </Paper>
                            </Grid>
                        )
                    })}

                </Grid>
           
        </div>
    );
}
