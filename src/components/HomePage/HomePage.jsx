import Navbar from '../Navbar'
import Footer from '../Footer'
import HeroSec from './HeroSec'
import Education from './Education'
import Pricing from './PricingSec'
import Trust from './TrustSec'
import ZerodhaAccount from '../ZerodhaAccount.jsx'
export default function HomePage(){
    return (
        <>
        <Navbar/>
        <HeroSec/>
        <Trust/>
        <Pricing/>
        <Education/>
        <ZerodhaAccount/>
        <Footer/>
        </>
    )
}