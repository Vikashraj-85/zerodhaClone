import React from 'react'

const ChargeOptional = () => {
  return (
   <div className="container my-5">
    <div className="row">
      <div className="col pricing-charge-optional">
      Charges for optional value added services
      </div>
    </div>
    <div className="row">
      <div className="col border ">
      <table className="table mt-3 table-striped">
            <thead className="table-light">
                <tr>
                    <td>Service</td>
                    <td>Billing Frequency</td>
                    <td>Charges</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tickertape</td>
                    <td>Monthly / Annual</td>
                    <td>Free: 0 | Pro: 249/2399</td>
                </tr>
                <tr>
                    <td>Smallcase</td>
                    <td>Per transaction</td>
                    <td>Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                    <td>Kite Connect</td>
                    <td>Monthly</td>
                    <td>Connect: 2000 | Historical: 2000</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
   </div>
  )
}

export default ChargeOptional
