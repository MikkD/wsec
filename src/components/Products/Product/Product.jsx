import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

function Product({ product, addItemToCart }) {
    const classes = useStyles();
    // console.log('Product', product);
    return (
        <>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h6" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h6">
                            {product.price.raw}$
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body1" color="textSecondary" />
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton onClick={() => addItemToCart(product.id, 1)} aria-label="add-to-card">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}

export default Product
