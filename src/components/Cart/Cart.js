import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "./CartSlice";

export const Cart = () => {
    const cartContents = useSelector(selectCart);

    return (
        <div className="cartContainer">
            {cartContents.map((player) => {
                return (
                    <div className="cartPlayerCard">
                        <h3>{player.firstName} {player.lastName}</h3>
                        <p>${player.auctionValue}</p>
                    </div>
                )
            })}
        </div>
    )
}