import React from 'react'
import stepAcop from '../../assets/images/steps-acop.svg'

const DematAccount = () => {
  return (
    <div className='container-fliud demat-account pb-5 '>
          <div className="container py-5 ">
            <div className="row my-2">
              <div className="col demate-accont-title mb-5">
              Steps to open a demat account with Zerodha
              </div>
            </div>
            <div className="row gap-5 d-flex align-items-center">
              <div className="col-md-6  text-end  ">
                <img src={stepAcop} alt="" />
              </div>
              <div className="col-md-4">
                <div className="row ">
                  <div className="col demate-right-text ">
                  <h3>01</h3>
                  <p>Enter the requested details</p>
                  </div>
                </div>
                <div className="row ">
                  <div className="col demate-right-text ">
                  <h3>02</h3>
                  <p>Complete e-sign & verification</p>
                  </div>
                </div>
                <div className="row ">
                  <div className="col demate-right-text ">
                  <h3>03</h3>
                  <p>Start investing!</p>
                  </div>
                </div>                
              </div>
            </div>
          </div>
    </div>
  )
}

export default DematAccount
