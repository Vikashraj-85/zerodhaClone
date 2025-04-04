import Logopng from '../assets/images/logo.svg';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
export default function Footer() {
    return (
        <div className="container-fluid border-top footer py-5 ">
            <div className="container  ">
                <div className="row">
                    <div className="col-md-3 footer-1">
                        <div className="row my-3">
                            <div className="col footer-1-img">
                                <img src={Logopng} alt="" height={22} />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="footer-1-text col">
                                © 2010 - 2025, Zerodha Broking Ltd.All rights reserved.
                            </div>
                        </div>
                        <div className=" row  footer-1-social-media border-bottom py-3">
                            <div className="social-1 col ">
                                <a href='#'><XIcon /></a>
                                <a href='#'><FacebookIcon /> </a>
                                <a href='#'><InstagramIcon /></a>
                                <a href='#'><LinkedInIcon /></a>

                            </div>
                        </div>
                        <div className="row my-3">

                            <div className="social-2 col">
                                <a href='#'><YouTubeIcon /></a>
                                <a href='#'><WhatsAppIcon /></a>
                                <a href='#'><TelegramIcon /></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3  footer-2 footer-style">
                        <h2>Company</h2>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Referral programme</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Zerodha.tech</a></li>
                            <li><a href="#">Open source</a></li>
                            <li><a href="#">Press & media</a></li>
                            <li><a href="#">Zerodha Cares (CSR)</a></li>
                        </ul>

                    </div>
                    <div className="col-md-3   footer-3 footer-style">
                        <h2>Support</h2>
                        <ul>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Support portal</a></li>
                            <li><a href="#">Z-Connect blog</a></li>
                            <li><a href="#">List of charges</a></li>
                            <li><a href="#">Downloads & resources</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Market overview</a></li>
                            <li><a href="#">How to file a complaint?</a></li>
                            <li><a href="#">Status of your complaints</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3   footer-4 footer-style">
                        <h2>Account</h2>
                        <ul>
                            <li><a href="#">Open an account</a></li>
                            <li><a href="#">Fund transfer</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row pt-5 ">
                    <div className="col footer-para">

                        <p>
                            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='#'>complaints@zerodha.com</a>, for DP related to<a href='#'> dp@zerodha.com.</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                        </p>


                        <p>
                            Procedure to file a complaint on <a href='#'>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                        </p>

                        <p><a href='#'>Smart Online Dispute Resolution </a>| <a href='#' >Grievances Redressal Mechanism</a></p>

                        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.<br></br></p>

                        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.<br></br></p>

                        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='#'>create a ticket here</a>.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col footer-end-div-links text-center">
                        <a href='#'>NSE</a>
                        <a href='#'>BSE</a>
                        <a href='#'>MCX</a>
                        <a href='#'>Terms & conditions </a>
                        <a href='#'>Policies & procedures </a>
                        <a href='#'>Privacy policy </a>
                        <a href='#'>Disclosure </a>
                        <a href='#'>For investor's attention </a>
                        <a href='#'>Investor charter</a>
                    </div>
                </div>
            </div>
        </div>
    )
}