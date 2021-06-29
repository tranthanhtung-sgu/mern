import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import {url} from './Const'
import {useHistory,Link,Route} from 'react-router-dom'
import { blue } from '@material-ui/core/colors';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
  submit:{
    color:'green',
  }
  
});

export default function MyCard(props) {
  let history=useHistory();
  const classes = useStyles();
  const deleteProduct=()=>{
    axios.delete(`${url}/products/${props.id}`).then(res=>{
      console.log(res);
      axios.get(`${url}/products`).then((res)=>{
        props.updateProduct(res.data.products);
      }).catch((err)=>{
        console.log(err,"loi cmnr")
      })
    }).catch(err=>console.log(err.message,"loi delete"))
  }

  const updateItem=()=>{
    localStorage.setItem("idUpdate",props.id);
    console.log(localStorage.getItem("idUpdate"));
    history.push('/update');
  }
  return (

    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="h5" component="h2">
            {props.name}<Paper style={{paddingLeft:"50px"}}  elevation={3}><h4 >{props.quantity} items</h4></Paper>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
            <p>{props.screen}</p>
            <p>{props.cpu}</p>
            <p>{props.ram}</p>
            <p>{props.rom}</p>


          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={updateItem} size="small" color="primary" 
        style={{margin:'auto',paddingTop:'5px'}}
        >
          <Link to='/update'className={classes.submit}>
          <UpdateIcon/>
          </Link>
        </Button>
        <Button 
        style={{margin:'auto'}}
        onClick={deleteProduct} size="small" color="primary"  className={classes.submit}>
          <DeleteForeverOutlinedIcon/>       
          </Button>
      </CardActions>
    </Card>
   
  );
}
