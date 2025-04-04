import React from 'react'
import founderImg from '../../assets/images/nithinKamath.jpg';
const FounderSec = () => {
  return (
    <div className="container my-5">
          <div className="row">
            <div className="col  text-center about-founder-about ">
              People
            </div>
          </div>
          <div className="row my-5 ">
            <div className="col-md-5 about-founder-img ps-md-5 gx-md-3">
              <img src={founderImg} alt=""  className='mb-3'/>
              <h3>Nithin Kamath</h3>
              <p>Founder, CEO</p>
            </div>
            <div className="col-md-7 founder-bio">
              <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
              <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
              <p>Playing basketball is his zen.</p>
              <p>Connect on <a href='#'>HomePage</a> / <a href='#'>TradingQnA </a>/ <a href='#'>Twitter</a></p>
            </div>
          </div>
    </div>
  )
}

export default FounderSec
