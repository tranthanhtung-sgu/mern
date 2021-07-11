import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import UpdateIcon from '@material-ui/icons/Update';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { url } from '../../dasboard/Const'
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="localhost:3000/admim">
                TVSMobile
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        width: '100%',
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignOut(props) {
    const classes = useStyles();
    const [customer, setCustomer] = useState({})
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    //history
    let history = useHistory()
    //Submit
    const handleSubmit = (event) => {

    }
    useEffect(() => {
        axios(`${url}/customers/${localStorage.getItem("idLogin")}`)
            .then(res => {
                setCustomer(res.data.customer[0]);
                setEmail(customer.email)
            }
            ).catch(err => console.log(err.message, "loi"))


           
    }, [])

    
    
    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangePhone = (event) => {
        setAddress(event.target.value)
    }
    const handleChangeAddress = (event) => {
        setPhone(event.target.value)
    }


    const click = () => {
    }
    const backAdmin = () => {
        history.push("/admin")
    }  
   


    //FORM
    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <UpdateIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Update Product
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form} Validate>
                    <Button
                        onClick={backAdmin}
                        fullWidth
                        variant="contained"
                        color="success"
                        className={classes.submit}
                    >
                        Back
                    </Button>
                    <Button
                        onClick={click}
                        fullWidth
                        variant="contained"
                        color="success"
                        className={classes.submit}
                    >
                        GET OLD DATA
                    </Button>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Name"
                        label="Name"
                        id="Name"
                        value={name}
                        onChange={handleChangeName}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="Email"
                        id="email"
                        value={customer.email}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Phone"
                        label="Phone"
                        id="Phone"
                        value={phone}
                        onChange={handleChangePhone}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Address"
                        label="Address"
                        id="Address"
                        value={address}
                        onChange={handleChangeAddress}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Update
                    </Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>

        </Container>
    );
}

   //     <form className={classes.root} noValidate autoComplete="off">
    //     <TextField id="outlined-basic" label="Outlined" variant="Name" />
    //     <TextField id="outlined-basic" label="Outlined" variant="Screen" />
    //     <TextField id="outlined-basic" label="Outlined" variant="CPU" />
    //     <TextField id="outlined-basic" label="Outlined" variant="RAM" />
    //     <TextField id="outlined-basic" label="Outlined" variant="ROM" />
    //     <TextField id="outlined-basic" label="Outlined" variant="Image" />

    //   </form>