import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCartTotal, selectPlayersInCart } from "./CartSlice";
import { CartPlayerCard } from "./CartPlayerCard";
import './cart.css';

export const Cart = () => {
    const cartContents = useSelector(selectPlayersInCart);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div className="cartContainer">
            <p id="cartTotal">Cart Total: ${cartTotal}</p>
            <button>Checkout</button>
            {cartContents.map((player) => {
                return (
                    <CartPlayerCard player = {player} />
                )
            })}
           
        </div>
    )
}