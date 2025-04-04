import React from 'react'

const HeroSec = () => {
    return (
        <div className="container-fluid support-hero-sec">
            <div className="container my-5 py-md-4 py-5  ">
                <div className="row  text-white gap-5 ">
                    <div className="col-md-6 text-start support-hero-title mb-md-5 pb-md-4">
                        <h2>Support Portal</h2>
                        <p>Search for an answer or browse help topics to create a ticket</p>
                        <div className="search-bar ">
                            <input type="text" className="form-control" placeholder="Eg: how do I activate F&O, why is my order getting rejected ..." />
                        </div>
                        <div className="mt-3 support-left-links ">
                            <a href="#" className="me-3 text-white">Track account opening</a>
                            <a href="#" className="me-3 text-white">Track segment activation</a>
                            <a href="#" className="me-3 text-white">Intraday margins</a>
                            <a href="#" className="text-white">Kite user manual</a>
                        </div>
                    </div>
                    <div className="col-md-5 support-feature">
                        <div className="row mb-md-5 pb-md-5 pb-3">
                            <div className="col text-end  text-white fs-5 "><u>Track tickets</u></div>
                        </div>

                        <h4>Featured</h4>
                        <ol>
                            <li><a href="#">Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</a></li>
                            <li><a href="#">Change in mutual fund settlement cycle due to settlement holiday on account of Annual Bank closing (April 01, 2025)</a></li>
                        </ol>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSec
