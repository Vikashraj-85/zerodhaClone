import React from 'react'
import pricing0 from '../../assets/images/pricingMF.svg'
import pricing20 from '../../assets/images/intradayTrades.svg'

const PricingSec = () => {
  return (
    <div className="container py-md-5">
      <div className="row row-cols-md-3 row-cols-1 my-md-3 ">
        <div className="col pricing-pricingSec">
          <img src={pricing0} alt="" />
          <h3>Free equity delivery</h3>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col pricing-pricingSec">
          <img src={pricing20} alt="" />
          <h3>Intraday and F&O trades</h3>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col pricing-pricingSec">
          <img src={pricing0} alt="" />
          <h3>Free direct MF</h3>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default PricingSec
