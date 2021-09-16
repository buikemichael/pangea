import React from 'react'
import Cart from './Cart'
import CartStage from './CartStage'
import { useSelector } from 'react-redux';

export default function CartSideBAr(props) {
    const is_cart_open = useSelector(state => state.toggle_cart_sidebar)

    return (
        <>
            <div className="cart-holder">
                {is_cart_open.openCart ? <div className="cart-under-lay"></div> : false}
                <div className={`inner ${is_cart_open.openCart ? 'show' : ''} `}>
                    {is_cart_open.with_staging ? <CartStage /> : <Cart />}
                </div>
            </div>
        </>
    )
}
