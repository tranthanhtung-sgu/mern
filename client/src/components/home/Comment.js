import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import moment from 'moment';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    marginLeft: '100px'
  },
  inline: {
    display: 'inline',
  },
  btn:{
    color:"red"
  },
  text_date:{
    color:"gray",
    fontSize:"11px"
  }
}));

export default function AlignItemsList(props) {
  const classes = useStyles();
  const deleteComment=(id)=>{
    axios.delete(`http://localhost:5000/api/comments/${id}`)
    .then(res=>console.log(res))
    .catch(err => console.log(err))
    
  }
  return (
    <Grid xs={6}>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={props.info.customer.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {props.info.content}
                  {props.info.customer._id ==localStorage.getItem("idLogin") && <Button 
                  className={classes.btn}
                  onClick={()=>deleteComment(props.info._id)}
                  >delete</Button>}
                </Typography>
                <Typography
                  component="p"
                  color="textPrimary"
                  className={classes.text_date}
                >
                  { moment(props.info.createdAt.toString()).format("ddd/MM/YY hh:mm:ss")}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Grid>
  );
}
