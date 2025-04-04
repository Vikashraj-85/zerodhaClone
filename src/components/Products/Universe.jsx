import React from 'react'
import dittoLog from '../../assets/images/dittoLogo.png';
import ZerodhFundHouseLogo from '../../assets/images/zerodhaFundhouse.png';
import streakLogo from '../../assets/images/streakLogo.png';
import smallcaselLogo from '../../assets/images/smallcaseLogo.png';
import sensibilLogo from '../../assets/images/sensibullLogo.svg';
import tijoriLog from '../../assets/images/tijori.svg';
import {Link} from 'react-router-dom'

const Universe = () => {
  return (
    <div className="container my-5">
      <div className="row mb-5">
        <div className="col product-universe">
          <h3>The Zerodha Universe</h3>
          <p>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
      </div>
      <div className="row row-cols-md-3 d-flex  justify-content-center gap-5 product-universe-logos">
        <div className="col-md-3 product-universe-logo">
          <img src={ZerodhFundHouseLogo} alt="" />
          <p>Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.

          </p>
        </div>
        <div className="col-md-3 product-universe-logo">
          <img src={sensibilLogo} alt="" />
          <p>Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-md-3 product-universe-logo">
          <img src={tijoriLog} alt="" />
          <p>Investment research platform
            that offers detailed insights on stocks,
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-md-3 product-universe-logo">
          <img src={streakLogo} alt="" />
          <p>Systematic trading platform
            that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-md-3 product-universe-logo">
          <img src={smallcaselLogo} alt="" />
          <p>
            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-md-3 product-universe-logo">
          <img src={dittoLog} alt="" />
          <p>Personalized advice on life
            and health insurance. No spam
            and no mis-selling.
            Sign up for free
          </p>
        </div>
      </div>
      <div className="row my-5">
        <div className="col product-universe-btn text-center">
          <Link to={'/signup'}> <button>Sign up for free</button></Link>
         
        </div>
      </div>
    </div>
  )
}

export default Universe
