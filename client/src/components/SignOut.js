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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignOut(props) {
  const history=useHistory()
  useEffect(() => {
    axios.get('http://localhost:5000/api/customers').then(res => {
      setCustomers(res.data.customers)
    }).catch(err => console.log(err.message))
  }, [])
  const classes = useStyles();
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [RePassword, setRePassword] = useState('')
  const [Phone, setPhone] = useState('')
  const [Address, setAddress] = useState('')
  const [Email, setEmail] = useState('')
  const [FullName, setFullName] = useState('')
  const [Customers, setCustomers] = useState([])
  //history
  //Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const result = Customers.find(item => item.username == Username)
    const result1= Customers.find(item => item.email == Email)
    if (result||result1) {
      alert("Your username or email had been used");
    }
    else {
      if (Password === RePassword) {
        axios.post('http://localhost:5000/api/customers/register/', { username: Username, password: Password, phone: Phone, email: Email, address: Address, name: FullName })
          .then(function (res) {
            // handle success
            console.log(res);
            if (res.data.success === true) {
              alert("login success");
              history.push("/home")
              localStorage.setItem("accessToken", true);
              localStorage.setItem("idLogin", res.data.customer._id);
            }

          })
          .catch(function (error) {
            // handle error
            console.log(error.message);
            alert("login fail")
          })
      }
      else {
        alert("mat khau khong trung nhau");
      }
    }
  }


  const handleChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)

  }
  const handleChangeRePassword = (event) => {
    setRePassword(event.target.value)

  }
  const handleChangePhone = (event) => {
    setPhone(event.target.value)

  }
  const handleChangeAddress = (event) => {
    setAddress(event.target.value)

  }
  const handleChangeEmail = (event) => {
    setEmail(event.target.value)

  }
  const handleChangeFullName = (event) => {
    setFullName(event.target.value)

  }


  //FORM
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} Validate>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            type="email"
            autoFocus
            value={Email}
            onChange={handleChangeEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="FullName"
            label="Full name"
            id="number"
            value={FullName}
            onChange={handleChangeFullName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Username"
            label="Username"
            id="number"
            value={Username}
            onChange={handleChangeUsername}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={Password}
            onChange={handleChangePassword}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="rePassword"
            label="Re-Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={RePassword}
            onChange={handleChangeRePassword}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Number phone"
            id="number"
            value={Phone}
            onChange={handleChangePhone}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Address"
            label="Number Address"
            id="number"
            value={Address}
            onChange={handleChangeAddress}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/admin" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}