import HeroSec from './HeroSec'
import LeftImageSec from './LeftImage'
import RightImageSec from './RightImahe'
import Universe from './Universe'
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import Heading from './Heading.jsx'
import './ProductPage.css'
import googleplayStore from '../../assets/images/googlePlayBadge.svg'
import appStore from '../../assets/images/appstoreBadge.svg'
import leftimgkite1 from '../../assets/images/kite.png'
import leftImg3 from '../../assets/images/varsity.png'
import leftImg2 from '../../assets/images/coin.png'
import rightImg1 from '../../assets/images/console.png'
import rightImg2 from '../../assets/images/kiteconnect.png'

export default function ProductPage() {
    return (
        <>
            <Navbar />
            <HeroSec />
            <div className="container mb-4 border-top"></div>
            <LeftImageSec
                mainImg={leftimgkite1}
                title={'Kite'}
                paragraph={'Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'}
                link1={'Try Demo  →'}
                link2={'Learn more →'}
                appStore={appStore}
                playstore={googleplayStore}
            />
            <RightImageSec 
                mainImg={rightImg1}
                title={'Console'}
                paragraph={'The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'}
                link1={'Learn more →'}
                link2={' '}
                appstore={' '}
                palystore={' '}
            />
             <LeftImageSec
                mainImg={leftImg2}
                title={'Coin'}
                paragraph={'Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'}
                link1={'Coin →'}
                link2={''}
                appStore={appStore}
                playstore={googleplayStore}
            />
             <RightImageSec 
                mainImg={rightImg2}
                title={'Kite Connect API'}
                paragraph={'Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'}
                link1={'Kite Connect →'}
                link2={' '}
                appstore={' '}
                palystore={' '}
            />
             <LeftImageSec
                mainImg={leftImg3}
                title={'Varsity mobile'}
                paragraph={'An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'}
                link1={''}
                link2={''}
                appStore={appStore}
                playstore={googleplayStore}
            />
            <Heading/>
            <Universe />
            <Footer />
        </>
    )
}