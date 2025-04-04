import {Link} from 'react-router-dom'

export default function ZerodhaAccount(){
    return(
        <div className="container py-5 my-4">
            <div className="row my-4 ">
                <div className="col text-center">
                    <h2 className="home-hero-h1 fs-1 my-4">Open a Zerodha account</h2>
                    <p className="home-hero-p fs-5 my-4">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <Link to={'/signup'} ><button className=" btn home-signup-btn py-2 my-4">Sign up for free</button></Link>
                    
                </div>
            </div>
        </div>
    )
}