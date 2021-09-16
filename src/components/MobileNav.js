import React from 'react'

export default function MobileNav(props) {
    return (
        <>
            <div className="mobile-nav">
                <div className={`inner ${props.is_mobile_nav ? 'show' : ''} `}>
                    <button onClick={props.toggleMobileNav} className="closeButton"><div>X</div></button>
                    <div className="top">
                        <div className="active">Shop</div>
                        <div>About</div>
                        <div>Support</div>
                    </div>
                    <div className="down" >
                        <div>Face</div>
                        <div>Hair & Body</div>
                        <div>Sets</div>
                        <div>Accessories</div>
                        <div>Shop All</div>
                    </div>
                </div>
            </div>
        </>
    )
}
