import React from 'react'
import stocksacop from '../../assets/images/stocks-acop.svg'
import mutualFund from '../../assets/images/mf-acop.svg'
import foAcop from '../../assets/images/fo-acop.svg'
import acopBenefit from '../../assets/images/acop-benefits.svg'
import stepAcop from '../../assets/images/steps-acop.svg'
import ipoAcop from '../../assets/images/ipo-acop.svg'

const InvestOption = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col  py-5">
          <h1 className='text-center signup-invest-h1'>Investment options with Zerodha demat account</h1>
        </div>
        <div className="row d-flex justify-content-center gap-5 my-5 ">
          <div className="col-md-5 signup-invest-options">
            <div className="signup-invest-option-img">
              <img src={stocksacop} alt="" />
            </div>
            <div className="signup-invest-option-text">
              <h2>Stocks</h2>
              <p>Invest in all exchange-listed securities</p>
            </div>
          </div>
          <div className="col-md-5 signup-invest-options">
            <div className="signup-invest-option-img">
              <img src={mutualFund} alt="" />
            </div>
            <div className="signup-invest-option-text">
              <h2>Mutual funds</h2>
              <p>Invest in commission-free direct mutual funds</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center gap-5">
          <div className="col-md-5 signup-invest-options">
            <div className="signup-invest-option-img">
              <img src={ipoAcop} alt="" />
            </div>
            <div className="signup-invest-option-text">
              <h2>IPO</h2>
              <p>Apply to the latest IPOs instantly via UPI</p>
            </div>
          </div>
          <div className="col-md-5 signup-invest-options">
            <div className="signup-invest-option-img ">
              <img src={foAcop} alt="" />
            </div>
            <div className="signup-invest-option-text ">
              <h2>Futures & options</h2>
              <p>Hedge and mitigate market risk through simplified F&O trading</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col text-center my-4">
          <button className=' explore-btn'>Explore Investments</button>
        </div>
      </div>
    </div>
  )
}

export default InvestOption
