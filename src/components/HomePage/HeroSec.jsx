import HomeHeroImg from '../../assets/images/homeHero.png'
import './HomePage.css'
export default function HeroSec() {
    return (
        <div className="container d-flex  justify-content-center flex-column align-items-center text-center mt-5 ">
            <div className="row  mt-5 home-hero-img ">
                <div className="col-sm  mb-3 pt-5">
                    <img src={HomeHeroImg} alt=""  />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col ">
                    <h2 className='home-hero-h1'>Invest in everything</h2>
                    <p className='fs-4 mb-5 home-hero-p'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='btn  py-2 home-signup-btn mb-5'>Sign up for free</button>
                </div>
            </div>
        </div>
    )
}