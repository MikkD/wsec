import React from 'react';
import { Typography, Button, Card, CardContent, CardMedia, CardActions } from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({ cartItem: { name, id, price: { raw }, media: { source }, quantity }, removeItemOffCart, updateCartQuantity }) => {
    const classes = useStyles();

    return (
        <>
            <Card>
                <CardMedia image={source} className={classes.cardMed} />
                <CardContent>
                    <Typography variant="h5">{name} : {raw}$</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => updateCartQuantity(id, quantity - 1)} variant="contained" type="button" size="large">-</Button>
                    <Typography variant="h6"> {quantity} </Typography>
                    <Button onClick={() => updateCartQuantity(id, quantity + 1)} variant="contained" type="button" size="large">+</Button>
                    <Button onClick={() => removeItemOffCart(id)} variant="contained" type="button" size="large" color="secondary">REMOVE</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default CartItem;