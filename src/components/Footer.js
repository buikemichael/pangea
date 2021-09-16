import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="inner">
                    <div className="f-inner-head">
                        <div>
                            <h2>Let’s stay in touch</h2>
                            <p>We’ll give you a heads up on new Lumin products, deals, and events, plus tips & tricks on how to keep your skin looking its damned finest.</p>
                            <div className="email-subscribe">
                                <form>
                                    <div>
                                        <input placeholder="EMAIL ADDRESS" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="useful-links">
                        <div className="links">
                            <a href="/">Shop</a>
                            <a href="/">Skin</a>
                            <a href="/">Hair</a>
                            <a href="/">Body</a>
                        </div>
                        <div className="links">
                            <a href="/">About</a>
                            <a href="/">Blog</a>
                            <a href="/">How To</a>
                            <a href="/">ingredients</a>
                            <a href="/">Reviews</a>
                            <a href="/">Accessibility</a>
                            <a href="/">FAQ</a>
                        </div>
                        <div className="links">
                            <a href="/">More</a>
                            <a href="/">Job</a>
                            <a href="/">Wholesale</a>
                            <a href="/">Heros Program</a>
                            <a href="/">Request Personal Data</a>
                        </div>
                        <div className="links">
                            {/* <a href="/"></a>
                            <a href="/"></a>
                            <a href="/"></a> */}
                        </div>
                    </div>
                </div>
                <div className="f-inner-foot">
                    <div className="need-help">
                        <p>Need Help?</p>
                        <p>Contact us through our <a href="/">Support Concierge</a></p>
                        <p>Or email us at <a href="/">support@luminskin.com</a></p>
                    </div>
                    <div className="supported-payment">
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <p></p>
                    </div>
                    <div className="policy">
                        <a href="/">Privacy Policy</a>
                        <a href="/">Return Policy</a>
                        <a href="/">Terms of Service</a>
                    </div>
                    <div className="address">
                        <p>
                            3600 Wilshire Boulevard, Suite 1700, Los Angeles, CA 90010
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
