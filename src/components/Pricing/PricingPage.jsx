import ChargeTextSec from "./ChargeTextSec";
import PricingSec from "./PricingSec.jsx";
import EquitySec from "./EquitySec";
import Calculator from "./calculatorSex.jsx";
import ChargeExplainSec from "./ChargeExplainSec";
import ChargeAccou from "./ChargeAccou";
import ChargeOptional from './ChargeOptional.jsx'
import Footer from "../Footer";
import Navbar from "../Navbar";
import './Pricing.css'

export default function PricingPage(){
    return (
       <>
       <Navbar/>
        <ChargeTextSec/>
        <PricingSec/>
        <EquitySec/>
        < Calculator/>
        < ChargeExplainSec/>
         < ChargeAccou/>
         < ChargeOptional/>
         <Footer/>
       </>
    )
}