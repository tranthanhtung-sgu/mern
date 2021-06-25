import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from './Container'
import { getProducts } from '../api/product'
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
}));

export default function FullWidthTabs() {
    //PRODUCTS
    const [products, setProducts] = useState([])
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    //GET PRODUCTS
    useEffect(() => {
        getProducts().then(res => {
            setProducts(res.data.products)
        }).catch(err => console.log(err.message))
        return () => {

        }
    })

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Iphone" {...a11yProps(0)} />
                    <Tab label="Samsung" {...a11yProps(1)} />
                    <Tab label="Huawei" {...a11yProps(2)} />
                    <Tab label="Oppo" {...a11yProps(3)} />

                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Container products={products.filter(product=>product.name.includes("Iphone"))}></Container>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Container products={products.filter(product=>product.name.includes("Samsung"))}></Container>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Container products={products.filter(product=>product.name.includes("Huawei"))}></Container>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <Container products={products.filter(product=>product.name.includes("Oppo"))}></Container>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
