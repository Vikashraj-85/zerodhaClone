import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import Herosec from './Herosec.jsx'
import AccountType from './AccountType.jsx'
import BenefitsDemat from './BenefitDemat.jsx'
import DematAccout from './DematAccount.jsx'
import Faqs from './Faqs.jsx'
import InvestOption from './InvestOption.jsx'
import ZerodhAccount from '../ZerodhaAccount.jsx'
import './Signuppage.css'

export default function Signup() {
    return (
        <>
            <Navbar />
            <Herosec/>
            <InvestOption/>
            <DematAccout/>
            <BenefitsDemat/>
            <AccountType/>
            <Faqs/>
            <ZerodhAccount/>
            <Footer />
        </>
    )
}