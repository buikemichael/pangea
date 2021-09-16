import React, { useState } from 'react'
import MobileNav from './MobileNav'
import Header from './Header'
import Footer from './Footer'
import ProductList from './ProductList'
import CartSideBAr from './CartSideBAr'

export default function Products() {
    const [is_mobile_nav, set_is_mobile_nav] = useState(false)
    const [is_cart_open, set_is_cart_open] = useState(false)
    const toggleMobileNav = () => {
        set_is_mobile_nav(!is_mobile_nav)
    }
    const toggleCart = () => {
        set_is_cart_open(!is_cart_open)
    }

    return (
        <>
            <div className="hero">
                <MobileNav is_mobile_nav={is_mobile_nav} toggleMobileNav={toggleMobileNav} />
                <CartSideBAr is_cart_open={is_cart_open} toggleCart={toggleCart} />
                <div className="main">
                    <Header toggleMobileNav={toggleMobileNav} toggleCart={toggleCart} />
                    <div className="hero-text-holder">
                        <div className="hero-container">
                            <div className='hero-text'>
                                <div>
                                    <h1>All Products</h1>
                                    <p>A 360° look at Lumin</p>
                                </div>
                                <div className="filter-holder">
                                    <select className="filter-by">
                                        <option>Filter by</option>
                                        <option>All Products</option>
                                        <option>New Products</option>
                                        <option>Sets</option>
                                        <option>Skincare</option>
                                        <option>Head & Body Care</option>
                                        <option>Accessories</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductList />
            <Footer />
        </>
    )
}
