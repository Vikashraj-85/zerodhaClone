import React from 'react'

const ChargeAccou = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col pricing-charge-account">
          Charges for account opening
        </div>
      </div>
      <div className="row">
        <div className="col border ">
          <table className="table  mt-3  text-start table-striped">
            <thead className="">
              <tr>
                <td>Type of account</td>
                <td>Charges</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td><span className="badge bg-success">FREE</span></td>
              </tr>
              <tr>
                <td>Offline account</td>
                <td><span className="badge bg-success">FREE</span></td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>&#8377; 500</td>
              </tr>
              <tr>
                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                <td>&#8377; 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ChargeAccou
