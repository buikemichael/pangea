import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useQuery, } from "@apollo/client";
import gql from 'graphql-tag'
import { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, toggleCartSideBar, setCurrency } from '../redux/action';

export default function Cart() {
    const currency = useSelector(state => state.currency)
    const dispatch = useDispatch()

    const handleCloseSideBar = () => {
        dispatch(toggleCartSideBar())
    }

    const removeItem = (id) => {
        dispatch(removeItemFromCart(id))
    }
    const increaseQuantity = (id) => {
        dispatch(increaseItemQuantity(id))
    }

    const decreaseQuantity = (id) => {
        dispatch(decreaseItemQuantity(id))
    }

    const dispatchCurrency = (value) => {
        dispatch(setCurrency(value))
    }

    const CURRENCY = gql`
        query getCurrencies{
            currency
        }`;


    function GetCurrencies() {
        const { loading, error, data } = useQuery(CURRENCY)
        if (loading) return <option>Loading...</option>
        if (error) return <option>Error ...</option>

        return data.currency.map((item, index) => {
            return <option key={index}>{item}</option>
        })
    }

    const PRODUCTS = gql`
    query getProducts($currency:Currency!) {
    products{
        id
        title
        image_url
        price(currency:$currency)
        }
    }
    `;

    function CartItem() {
        const cart = useSelector(state => state.cart)
        const currency = useSelector(state => state.currency)
        const { loading, error, data, refetch } = useQuery(PRODUCTS, {
            variables: {
                currency: "USD"
            }
        })

        useEffect(() => {
            refetch({ currency })
        }, [currency, refetch])

        if (loading) return <option>Loading...</option>
        if (error) return <option>Error ...</option>

        const filteredCart = cart.map(x => {
            let item = data.products.find(item => item.id === x.id)
            if (item) {
                return Object.assign({}, x, item)
            }
            return x
        })

        if (!filteredCart.length) {
            return <div className="no-cart-item">There are no items in your cart.</div>
        }
        return filteredCart.map((item) => {
            return <div className="cart-item" key={item.id}>
                <div className="description-holder">
                    <button onClick={() => removeItem(item.id)}>X</button>
                    <h6>{item.title}</h6>
                    <p className="description">One time purchase of Two Months supply</p>
                    <div className="quantity">
                        <div className="quantity-setting">
                            <span onClick={() => decreaseQuantity(item.id)}>-</span>
                            <span>{item.quantity}</span>
                            <span onClick={() => increaseQuantity(item.id)}>+</span>
                        </div>
                        <div className="price">{new Intl.NumberFormat('en-US', { style: 'currency', currency: localStorage.getItem('currency'), }).format(item.price * item.quantity)}</div>
                    </div>
                </div>
                <div className="img-holder"><img src={item.image_url} alt="sample" /></div>
            </div>
        })
    }

    function GetTotalAmount() {
        const cart = useSelector(state => state.cart)
        const currency = useSelector(state => state.currency)

        const { loading, error, data, refetch } = useQuery(PRODUCTS, {
            variables: {
                currency: localStorage.getItem('currency')
            }
        })

        useEffect(() => {
            refetch({ currency })
        }, [currency, refetch])

        if (loading) return ''

        const amount = 0

        const filteredCart = cart.map(x => {
            let item = data.products.find(item => item.id === x.id)
            if (item) {
                return amount + (x.quantity * item.price)
            }
            return x
        })?.reduce((a, b) => a + b,0)
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: localStorage.getItem('currency'), }).format(filteredCart)

    }

    return (
        <>
            <div className="cart">
                <div className="cart-inner">
                    <div className="title">
                        <div>
                            <button onClick={() => handleCloseSideBar()} className="closeButton"><div>X</div></button>
                        </div>
                        <h5>YOUR CART</h5>
                        <div></div>
                    </div>
                    <div className="currency-holder"><select onChange={(e) => {
                        dispatchCurrency(e.target.value)
                        localStorage.setItem("currency", e.target.value)
                    }
                    } value={currency}>
                        <GetCurrencies />
                    </select>
                    </div>
                    <div className="cart-list-holder">
                        <div className="cart-list">
                            <CartItem />
                        </div>
                    </div>
                    <div className="f-check-out">
                        <div className="f-check-out-inner">
                            <div className="f-checkout-header">
                                <p>Subtotal</p>
                                <p><GetTotalAmount /></p>
                            </div>
                            <div className="f-btn">
                                <div className="subscription-btn">MAKE THIS A SUBSCRIPTION (SAVE 20%)</div>
                                <div className="checkout-btn">PROCEED TO CHECKOUT</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
