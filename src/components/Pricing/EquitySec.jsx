import React from 'react'

const EquitySec = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-12  my-tab-items pricing-equity">
          <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active " id="pills-home-tab" data-bs-toggle="pill"
                data-bs-target="#Introduction" type="button" role="tab" aria-controls="pills-home"
                aria-selected="true">Equity
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                data-bs-target="#Case_Studies" type="button" role="tab" aria-controls="pills-profile"
                aria-selected="false">Currency
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                data-bs-target="#Matsery" type="button" role="tab" aria-controls="pills-contact"
                aria-selected="false">
                Commodity</button>
            </li>
          </ul>
          <div className="container border-top mb-4 mt-1"></div>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="Introduction" role="tabpanel"
              aria-labelledby="nav-home-tab" tabIndex="0">
              <div className="row ">
              <div className="col">
                  <div className="table-responsive">
                    <table className="table table-bordered text-center  table-striped">
                      <thead className="table-light">
                        <tr>
                          <th>Category</th>
                          <th>Equity Delivery</th>
                          <th>Equity Intraday</th>
                          <th  id='show-in-window' >F&O - Futures</th>
                          <th  id='show-in-window' >F&O - Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Brokerage</td>
                          <td>Zero Brokerage</td>
                          <td>0.03% or Rs. 20/executed order whichever is lower</td>
                          <td id='show-in-window' >0.03% or Rs. 20/executed order whichever is lower</td>
                          <td id='show-in-window' >Flat Rs. 20 per executed order</td>
                        </tr>
                        <tr>
                          <td>STT/CTT</td>
                          <td>0.1% on buy & sell</td>
                          <td>0.025% on the sell side</td>
                          <td id='show-in-window' >0.02% on the sell side</td>
                          <td id='show-in-window' >
                            <ul className="text-start">
                              <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                              <li>0.1% on sell side (on premium)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Transaction Charges</td>
                          <td>NSE: 0.00297%, BSE: 0.00375%</td>
                          <td>NSE: 0.00297%</td>
                          <td id='show-in-window' >NSE: 0.00173%, BSE: 0%</td>
                          <td id='show-in-window' >NSE: 0.03503% (on premium), BSE: 0.0325% (on premium)</td>
                        </tr>
                        <tr>
                          <td>GST</td>
                          <td colSpan="4">18% on (brokerage + SEBI charges + transaction charges)</td>
                        </tr>
                        <tr>
                          <td>SEBI Charges</td>
                          <td colSpan="4">₹10 / crore</td>
                        </tr>
                        <tr>
                          <td>Stamp Charges</td>
                          <td>0.015% or ₹1500 / crore on buy side</td>
                          <td>0.003% or ₹300 / crore on buy side</td>
                          <td id='show-in-window' >0.002% or ₹200 / crore on buy side</td>
                          <td id='show-in-window' >0.003% or ₹300 / crore on buy side</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="Case_Studies" role="tabpanel" aria-labelledby="nav-profile-tab"
              tabIndex="0">
              <div className="row  ">
              <div className="col">
                  <div className="table-responsive">
                    <table className="table table-bordered text-center  table-striped">
                      <thead className="table-light">
                        <tr>
                          <th>Category</th>
                          <th>Equity Delivery</th>
                          <th>Equity Intraday</th>
                          <th  id='show-in-window' >F&O - Futures</th>
                          <th  id='show-in-window' >F&O - Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Brokerage</td>
                          <td>Zero Brokerage</td>
                          <td>0.03% or Rs. 20/executed order whichever is lower</td>
                          <td id='show-in-window' >0.03% or Rs. 20/executed order whichever is lower</td>
                          <td id='show-in-window' >Flat Rs. 20 per executed order</td>
                        </tr>
                        <tr>
                          <td>STT/CTT</td>
                          <td>0.1% on buy & sell</td>
                          <td>0.025% on the sell side</td>
                          <td id='show-in-window' >0.02% on the sell side</td>
                          <td id='show-in-window' >
                            <ul className="text-start">
                              <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                              <li>0.1% on sell side (on premium)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Transaction Charges</td>
                          <td>NSE: 0.00297%, BSE: 0.00375%</td>
                          <td>NSE: 0.00297%</td>
                          <td id='show-in-window' >NSE: 0.00173%, BSE: 0%</td>
                          <td id='show-in-window' >NSE: 0.03503% (on premium), BSE: 0.0325% (on premium)</td>
                        </tr>
                        <tr>
                          <td>GST</td>
                          <td colSpan="4">18% on (brokerage + SEBI charges + transaction charges)</td>
                        </tr>
                        <tr>
                          <td>SEBI Charges</td>
                          <td colSpan="4">₹10 / crore</td>
                        </tr>
                        <tr>
                          <td>Stamp Charges</td>
                          <td>0.015% or ₹1500 / crore on buy side</td>
                          <td>0.003% or ₹300 / crore on buy side</td>
                          <td id='show-in-window' >0.002% or ₹200 / crore on buy side</td>
                          <td id='show-in-window' >0.003% or ₹300 / crore on buy side</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="Matsery" role="tabpanel" aria-labelledby="nav-profile-tab"
              tabIndex="0">
              <div className="row ">
              <div className="col">
                  <div className="table-responsive">
                    <table className="table table-bordered text-center  table-striped">
                      <thead className="table-light">
                        <tr>
                          <th>Category</th>
                          <th>Equity Delivery</th>
                          <th>Equity Intraday</th>
                          <th  id='show-in-window' >F&O - Futures</th>
                          <th  id='show-in-window' >F&O - Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Brokerage</td>
                          <td>Zero Brokerage</td>
                          <td>0.03% or Rs. 20/executed order whichever is lower</td>
                          <td id='show-in-window' >0.03% or Rs. 20/executed order whichever is lower</td>
                          <td id='show-in-window' >Flat Rs. 20 per executed order</td>
                        </tr>
                        <tr>
                          <td>STT/CTT</td>
                          <td>0.1% on buy & sell</td>
                          <td>0.025% on the sell side</td>
                          <td id='show-in-window' >0.02% on the sell side</td>
                          <td id='show-in-window' >
                            <ul className="text-start">
                              <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                              <li>0.1% on sell side (on premium)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Transaction Charges</td>
                          <td>NSE: 0.00297%, BSE: 0.00375%</td>
                          <td>NSE: 0.00297%</td>
                          <td id='show-in-window' >NSE: 0.00173%, BSE: 0%</td>
                          <td id='show-in-window' >NSE: 0.03503% (on premium), BSE: 0.0325% (on premium)</td>
                        </tr>
                        <tr>
                          <td>GST</td>
                          <td colSpan="4">18% on (brokerage + SEBI charges + transaction charges)</td>
                        </tr>
                        <tr>
                          <td>SEBI Charges</td>
                          <td colSpan="4">₹10 / crore</td>
                        </tr>
                        <tr>
                          <td>Stamp Charges</td>
                          <td>0.015% or ₹1500 / crore on buy side</td>
                          <td>0.003% or ₹300 / crore on buy side</td>
                          <td id='show-in-window' >0.002% or ₹200 / crore on buy side</td>
                          <td id='show-in-window' >0.003% or ₹300 / crore on buy side</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default EquitySec;
