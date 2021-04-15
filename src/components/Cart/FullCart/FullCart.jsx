import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import useStyles from '../styles';
import CartItem from './CartItem/CartItem';

const FullCart = ({ cartItems, updateCartQuantity, removeItemOffCart }) => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={1}>
                {cartItems.map(cartItem => {
                    return (
                        <Grid item xs={12} md={4} key={cartItem.id}>
                            {console.log(cartItem)}
                            <CartItem
                                cartItem={cartItem}
                                updateCartQuantity={updateCartQuantity}
                                removeItemOffCart={removeItemOffCart} />
                        </Grid>
                    )
                })}
                <div className={classes.cardDetails}>
                    <Typography variant="h4">Total:</Typography>
                    <div>
                        <Button
                            className={classes.emptyButton}
                            type="button" size="large"
                            variant="contained"
                            color="secondary">
                            Empty Cart
                        </Button>
                        <Button
                            className={classes.checkoutButton}
                            type="button"
                            size="large"
                            variant="contained"
                            color="primary">
                            Checkout
                        </Button>
                    </div>
                </div>
            </Grid>
        </>
    )
}

export default FullCart;

