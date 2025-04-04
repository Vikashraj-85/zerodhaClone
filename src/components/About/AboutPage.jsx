import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import TextSec from './TextSec.jsx'
import Twoparagraf from './Twoparagraf.jsx'
import FounderSec from './FounderSec.jsx'
import Peoples from './Peoples.jsx'
import './AboutPage.css';

export default function AboutPage(){
    return (
        <>
            <Navbar/>
            <TextSec/>
            <Twoparagraf/>
            <FounderSec/>
            <Peoples/>
            <Footer/>
        </>
    )
}