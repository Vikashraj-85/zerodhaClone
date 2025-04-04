import pricing0 from '../../assets/images/pricingMF.svg'
import pricing20 from '../../assets/images/intradayTrades.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PricingSec(){
    return(
        <div className="container py-5">
            <div className="row d-flex align-items-center mt-5  " >
                <div className="col-md-5 pricing-left">
                    <h3 className='mb-4'>
                    Unbeatable pricing</h3>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#">See pricing <ArrowForwardIcon sx={{ fontSize: '1.4rem' }} /></a>
                </div>
                <div className="col-md-7">
                   <div className="row ">
                    <div className="col-md-4 sm-col-6 pricing-right" >
                        <img src={pricing0} alt="" width={120} />
                      <p className='pricing-right-text'>  Free account<br></br>
                      opening</p>
                    </div>
                    <div className="col-md-4 sm-col-6 pricing-right">
                        <img src={pricing0} alt="" width={120} />
                      <p className='pricing-right-text'>  Free equity delivery <br></br>
                      and direct mutual funds</p>
                    </div>
                    <div className="col-md-4 sm-col-6 pricing-right">
                        <img src={pricing20} alt="" width={120} />
                      <p className='pricing-right-text px-3'>   Intraday and<br></br>
                      F&O</p>
                    </div>
                   
                   </div>
                </div>
            </div>
        </div>
    )
}