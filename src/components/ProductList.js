import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openCartSidebar, addToCart, setCurrency } from '../redux/action';
import { useQuery } from "@apollo/client";
import gql from 'graphql-tag'

export default function ProductList() {
    const dispatch = useDispatch()
    const currency = useSelector(state => state.currency)

    // useEffect(() => {
    //     if (!cart.length) {
    //         let localItem = JSON.parse(localStorage.getItem('cart'))
    //         for (let i = 0; i < localItem.length; i++) {
    //             dispatch(addToCart(localItem[i]))
    //         }
    //     }
    // }, [cart,dispatch])

    // useEffect(() => {
    //     let stringCart = JSON.stringify(cart);
    //     localStorage.setItem("cart", stringCart)
    //     console.log(localStorage.getItem('cart'))
    // }, [cart])

    useEffect(() => {
        dispatch(setCurrency(localStorage.getItem('currency')))
    }, [dispatch])

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


    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
        dispatch(openCartSidebar())
    }



    const { loading, error, data, refetch } = useQuery(PRODUCTS, {
        variables: { currency: 'USD' },
        fetchPolicy: "cache-first",
        returnPartialData: true,
    })

    useEffect(() => {
        refetch({ currency })
    }, [currency, refetch])

    // let i = [1, 2, 3, 4]
    // i.map((item, index) => (
    //     <div className="cart-item-preloader" key={index}> <div className="cart-img-preloader animate"></div><div className="cart-title-preloader animate"></div><div className="cart-price-preloader animate"></div><div className="cart-add-preloader animate"></div> </div>
    // ))
    if (loading) return <div className="loading">Loading ...</div>

    if (error) return <div className="loading">{console.log(error)}</div>


    const result = data.products.map((item) => (
        <div className="item" key={item.id}> <div className="item-content"><a href='/'><img src={item.image_url} alt="featured products" /><h3 className="title">{item.title}</h3><p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: localStorage.getItem('currency'), }).format(item.price)}</p></a></div><div className="add-to-cart" onClick={() => { handleAddToCart({ id: item.id }) }}>Add to Cart</div> </div>
    )
    )

    return (
        <>
            <div className="featured-products">
                <div className="inner">
                    <div className="content">
                        {result}
                    </div>
                </div>
            </div>
        </>)
}
