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
import { url } from './Const'
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
    const [Name, setName] = useState('')
    const [Screen, setScreen] = useState('')
    const [CPU, setCPU] = useState('')
    const [RAM, setRAM] = useState('')
    const [ROM, setROM] = useState('')
    const [Image, setImage] = useState('')
    const [Quantity, setQuantity] = useState('')
    const [Price, setPrice] = useState('')
    const [product, setProduct] = useState({})
    //history
    let history = useHistory()
    //Submit
    const handleSubmit = (event) => {
        axios.put(`${url}/products/${localStorage.getItem("idUpdate")}`,
            {
                name: Name,
                screen: Screen,
                cpu: CPU,
                ram: RAM,
                rom: ROM,
                img: Image,
                quantity: Quantity,
                price:Price
            }).then(res => console.log(res, "success")
            );
        localStorage.setItem("updateProducts", localStorage.getItem("updateProducts") + 1)
        history.push('/admin')

        console.log(event);

    }
    useEffect(() => {
        const product = axios(`${url}/products/${localStorage.getItem("idUpdate")}`)
            .then(res => {
                console.log(res.data.product.name, "success")
                setProduct(res.data.product);

            }
            ).catch(err => console.log(err.message, "loi"))
        console.log(product);

    }, [])

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeScreen = (event) => {
        setScreen(event.target.value)

    }
    const handleChangeCPU = (event) => {
        setCPU(event.target.value)
    }
    const handleChangeRAM = (event) => {
        setRAM(event.target.value)
    }
    const handleChangeROM = (event) => {
        setROM(event.target.value)
    }
    const handleChangeImage = (event) => {
        setImage(event.target.value)
    }
    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value)
    }
    const handleChangePrice = (event) => {
        setPrice(event.target.value)
    }

    const click = () => {
        const { _id, name, screen, cpu, ram, rom, img, quantity ,price } = product;
        setName(name)
        setScreen(screen)
        setCPU(cpu)
        setRAM(ram)
        setROM(rom)
        setImage(img)
        setQuantity(quantity)
        setPrice(price)
    }
    const backAdmin = () => {
        history.push("/admin")
    }


    //FORM
    return (
        <Container component="main" maxWidth="xl">
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
                        id="Name"
                        label="Name"
                        name="name"
                        autoComplete="Name"
                        autoFocus
                        value={Name}
                        onChange={handleChangeName}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="screen"
                        label="Screen"
                        id="screen"
                        value={Screen}
                        onChange={handleChangeScreen}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="cpu"
                        label="CPU"
                        id="CPU"
                        value={CPU}
                        onChange={handleChangeCPU}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="ram"
                        label="RAM"
                        id="RAM"
                        value={RAM}
                        onChange={handleChangeRAM}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="rom"
                        label="ROM"
                        id="ROM"
                        value={ROM}
                        onChange={handleChangeROM}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="img"
                        label="Image"
                        id="Image"
                        value={Image}
                        onChange={handleChangeImage}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="quantity"
                        label="Quanity"
                        id="quantity"
                        value={Quantity}
                        onChange={handleChangeQuantity}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="price"
                        label="Price"
                        id="price"
                        value={Price}
                        onChange={handleChangePrice}
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