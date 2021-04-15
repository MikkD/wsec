import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import FullCart from './FullCart/FullCart';
const EmptyCart = () => <Typography variant="h4">Cart is Empty</Typography>;

function Cart({ cart, updateCartQuantity, removeItemOffCart }) {

    const isEmpty = cart.line_items.length < 1;
    console.log('cart==>', cart);
    const classes = useStyles();


    return (
        <>
            <Container className={classes.wrapper}>
                <div className={classes.toolbar} />
                <Typography className={classes.title} variant="h3">Shopping Cart</Typography>
                {isEmpty
                    ? <EmptyCart />
                    : <FullCart
                        updateCartQuantity={updateCartQuantity}
                        cartItems={cart.line_items}
                        removeItemOffCart={removeItemOffCart} />}
            </Container>
        </>
    )
}

export default Cart

