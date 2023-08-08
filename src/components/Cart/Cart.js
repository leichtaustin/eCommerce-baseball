import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCartTotal, selectPlayersInCart } from "./CartSlice";
import { CartPlayerCard } from "./CartPlayerCard";
import './cart.css';

export const Cart = () => {
    const cartContents = useSelector(selectPlayersInCart);
    const cartTotal = useSelector(selectCartTotal);

    const checkoutHandler = () => {
        document.getElementById('checkoutDisplay').style.display = 'block';
    }

    return (
        <div className="cartContainer">
            <p id="cartTotal">Cart Total: ${cartTotal}</p>
            <button onClick={checkoutHandler}>Checkout</button>
            {cartContents.map((player) => {
                return (
                    <CartPlayerCard player = {player} />
                )
            })}
           
        </div>
    )
}