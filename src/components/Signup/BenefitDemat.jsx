import React from 'react'
import AcopBenefit from '../../assets/images/acop-benefits.svg'
const BenefitDemat = () => {
  return (
    <div className="container my-md-5 py-5">
      <div className="row my-4 d-flex align-items-center justyfy-content-center">
        <div className="col-md-6 benefit-left ">
          <img src={AcopBenefit} alt="" />
          <p>Benefits of opening a Zerodha demat account</p>
        </div>
        <div className="col-md-6">
        <div className="row">
            <div className="col benefit-right">
              <h3>Unbeatable pricing</h3>
              <p>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
            </div>
          </div>
          <div className="row ">
            <div className="col benefit-right">
              <h3>Best investing experience</h3>
              <p>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
            </div>
          </div>
          <div className="row">
            <div className="col benefit-right">
              <h3>No spam or gimmicks</h3>
              <p>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col benefit-right">
              <h3>The Zerodha universe</h3>
              <p>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitDemat
