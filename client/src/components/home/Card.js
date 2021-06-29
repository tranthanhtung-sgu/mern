import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "160px",
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const addItemCart = (product) => {
    if (!sessionStorage.getItem("cart")) {
      sessionStorage.setItem("cart", product._id)
    }
    else{
      let arr=sessionStorage.getItem("cart").split(",");
      arr.push(product._id);
      sessionStorage.setItem("cart", arr)
  }

   


  }
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.product.name}
        subheader={props.product.brand.name}
      />
      <CardMedia
        className={classes.media}
        image={props.product.img}
        title="Paella dish"
      />
      <CardActions onClick={() => addItemCart(props.product)} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />Add
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon /> Buy
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="span">
            <p>Screen:{props.product.screen}</p>
            <p>CPU:{props.product.cpu}</p>
            <p>RAM:{props.product.ram}</p>
            <p>ROM:{props.product.rom}</p>
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}
