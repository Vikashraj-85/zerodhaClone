import ecoSystem from '../../assets/images/ecosystem.png';
import pressLogo from '../../assets/images/pressLogos.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function TrustSec() {
    return (
        <div className="container mt-5 pt-5">
            <div className="row d-flex justify-content-center align-items-start">
                <div className="col-lg-5">
                    <h2 className="mb-5  trust-h2">Trust with confidence</h2>
                    <div className="row">
                        <div className="col  trust-card-div">
                            <h5 className='mb-3'>Customer-first always</h5>
                            <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col trust-card-div">
                            <h5 className='mb-3'>No spam or gimmicks</h5>
                            <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col trust-card-div">
                            <h5 className='mb-3'>The Zerodha universe</h5>
                            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col trust-card-div">
                            <h5 className='mb-3'>Do better with money</h5>
                            <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-7 d-flex flex-column  align-items-center trust-img">
                    <img src={ecoSystem} alt="" width={623} />
                    <div className="row">
                        <div className="col  trust-img-link-btn">
                            <a href='#' className='fs-6  text-decoration-none mx-3'>Explore our products <ArrowForwardIcon sx={{ fontSize: '1.2rem' }} /></a>
                            <a href='#' className='fs-6 mx-3 text-decoration-none'>Try Kite demo <ArrowForwardIcon sx={{ fontSize: '1.2rem' }} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5">
            <div className="col d-flex justify-content-center press-logo">
                <a href='#'><img src={pressLogo} alt="" /></a>
            </div>
            </div>
        </div>
    )
}