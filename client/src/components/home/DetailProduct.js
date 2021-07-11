import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import Commnent from './Comment'
import axios from 'axios'
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
        marginTop: '100px',
        marginLeft: '100px',

    },
    textfield: {
        width: '100%'
    }
}))
const DetailProduct = (props) => {
    useEffect(() => {
        axios.get(`http://localhost:5000/api/comments/${product._id}`)
            .then(res => {
                setComments(res.data.comments)
            })
            .catch(err => console.log(err))
    })

    const localtion = useLocation()
    const classes = useStyles();
    const [content, setContent] = useState('')
    const [comments, setComments] = useState([])
    const product = localtion.state.product
    const commentContent = () => {
        axios.post('http://localhost:5000/api/comments', { content, customer: localStorage.getItem('idLogin'), product: product._id })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setContent('')
    }
    const handleContentChange = (e) => {
        setContent(e.target.value)
    }
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
                <Grid container item xs={6}>
                    {comments.map(item => {
                        return <Commnent info={item}></Commnent>
                    })}
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField
                                    onChange={handleContentChange}
                                    value={content}
                                    className={classes.textfield} id="input-with-icon-grid" label="Commnent" />
                                <IconButton
                                    onClick={commentContent}
                                    type="submit" className={classes.iconButton} aria-label="search">
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
