import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import musicLogo from '../../assets/music_icon.png';
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();


    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={musicLogo} alt="logo" width="50px" className={classes.image} />
                    </Typography>
                    {/* <div className={classes.grow} /> */}
                    {location.pathname === '/' &&
                        <div className={classes.menuButton}>
                            <Link></Link>
                            <IconButton component={Link} to="/cart" aria-label="show cart items">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;