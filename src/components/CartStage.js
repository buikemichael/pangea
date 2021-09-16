import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openCartSidebar, addToCart,toggleCartSideBar } from '../redux/action';
import gql from 'graphql-tag'
import { useQuery } from "@apollo/client";

export default function CartStage() {
    const [item, setItem] = useState(null)
    const item_in_staging = useSelector(state => state.cart_stage)

    useEffect(() => {
        setItem(item_in_staging)
    }, [item_in_staging])

    const dispatch = useDispatch()
    const handleCloseSideBar = () => {
        dispatch(toggleCartSideBar())
    }

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
        dispatch(openCartSidebar())
    }

    const PRODUCTS = gql`
        query getProducts{
        products{
            id
            image_url
            product_options{
                title
                prefix
                suffix
                options{
                  id
                  value
                }
              }
            }
        }`;


    function GetProducts() {
        const { loading, error, data } = useQuery(PRODUCTS)
        if (loading) return <div className="loading">Loading ...</div>

        if (error) return <div className="loading">Error ...</div>

        const foundProduct = data.products.find(item=>item.id ===item_in_staging.id )
        return foundProduct.product_options.map((item, index) => {
            return <div key={index}>
                <label>{item.title}</label>
                <select className="option-select">
                    {item.options.map((itemOption, optionIndex) => {
                        return <option key={optionIndex}>{itemOption.value}</option>
                    })}
                </select>
            </div>
        })
    }

    const product_options = item_in_staging?.product_options?.map((item, index) => {
        return <div key={index}>
            <label>{item.title}</label>
            <select className="option-select">
                {item.options.map((itemOption, optionIndex) => {
                    return <option key={optionIndex}>{itemOption.value}</option>
                })}
            </select>
        </div>
    })

    return (
        <>
            <div className="cart-staging">
                <div className="staging-inner">
                    <div>
                        <button onClick={() => handleCloseSideBar()} className="closeButton"><div>X</div></button>
                    </div>
                    <div className="item-image-holder">
                        <img src={item_in_staging?.image_url} alt="item" />
                    </div>
                    <div className="staging-body">
                        <h4>
                            First, let's personalize.
                        </h4>
                        <p className="first-p">
                            Products that you receive may vary according to your age bracket & skin type to optimize results.
                        </p>
                        <p className="second-p">
                            Personalization Details
                        </p>
                        {/* {product_options} */}
                        <GetProducts />
                    </div>
                    <div className="stage-add-to-cart-holder">
                        <div className="stage-add-to-cart" onClick={() => handleAddToCart(item)}>
                            ADD TO CART
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
