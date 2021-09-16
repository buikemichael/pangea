import React, { useState, useEffect } from 'react'
import { gql } from "@apollo/client";
import client from '../Apollo'

export default function FeaturedProducts() {
    const [featured, setFeatured] = useState([])

    useEffect(() => {
        client
            .query({
                query: gql`
            query{
                products{
                  id,
                  title,
                  image_url,
                  price(currency:USD),
                }
              }
        `
            })
            .then(result => {
                setFeatured(result.data.products.slice(0, 4))
            });
    }, [])
    console.log(featured)

    const getFeatured =
        featured.map((item) => {
            return <div className="item" key={item.id}> <a href="/"><img src={item.image_url} alt="featured products"  /><h3 className="title">{item.title}</h3><p>${item.price}.00</p></a> </div>
        })

    return (
        <>
            <div className="featured-products">
                <div className="inner">
                    <h2 className="inner-header">SHOP OUR FEATURED PRODUCTS</h2>
                    <div className="content">

                        {featured.length === 0 ? <div className="loading">Loading...</div> : getFeatured}
                    </div>
                    <div className="all-products">
                        <a href="/">See All Products</a>
                    </div>
                </div>
            </div>
        </>
    )
}
