import React, { useState, useEffect } from 'react';
import { Products, NavBar, Cart } from './components';
import { commerce } from './lib/commerce';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    const [musicProducts, setMusicProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchMusicItems = async () => {
        const { data } = await commerce.products.list();
        setMusicProducts(data)
    };
    const fetchItemsFromCart = async () => {
        const cartData = await commerce.cart.retrieve();
        setCart(cartData)
    };

    const addItemToCart = async (id, qty) => {
        // console.log('ADDED id =>', id);
        // console.log('ADDED qty => ', qty);
        const itemToAdd = await commerce.cart.add(id, qty);
        console.log('ADDED ==> itemToAdd ==>', itemToAdd);
        setCart(itemToAdd.cart)
    };
    const removeItemOffCart = async (id) => {
        const itemToAdd = await commerce.cart.remove(id);
        setCart(itemToAdd.cart)
    };

    const updateCartQuantity = async (id, qty) => {
        const updatedCart = await commerce.cart.update(id, 12);
        setCart(updatedCart.cart);
    };

    useEffect(() => {
        fetchMusicItems();
        fetchItemsFromCart()
    }, []);


    // console.log('RE_RENDER____NEW_CART', cart);

    if (musicProducts.length < 1) return <h3>...LOADING</h3>;

    return (
        <>
            <BrowserRouter>
                <NavBar
                    totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products
                            musicProducts={musicProducts}
                            addItemToCart={addItemToCart}
                        />
                    </Route>
                    <Route exact path="/cart">
                        <Cart
                            cart={cart}
                            updateCartQuantity={updateCartQuantity}
                            removeItemOffCart={removeItemOffCart}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App

