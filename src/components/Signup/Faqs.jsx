import React from 'react'

const Faqs = () => {
  return (
    <div className="container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is a Zerodha account?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              What documents are required to open a demat account?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              The following documents are required to open a Zerodha account online:
              <ul>
                <li>PAN number</li>
                <li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
                <li>Cancelled cheque or bank account statement (To link your bank account)</li>
                <li>Income proof (Required only if you wish to trade in Futures & options)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Is Zerodha account opening free?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Yes, It is completely free.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
              Can I open a demat account without a bank account?
            </button>
          </h2>
          <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              To open a demat account, you must have a bank account in your name.
              If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Are there any maintenance charges for a demat account?
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              The account maintaince charges is appliacable based on the account type.
              For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.
              For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.
              To learn more about BSDA, Click here.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs
