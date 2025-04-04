import Logo from '../assets/images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import './Navbar.css';


export default function Navabr() {
   
    return (


        <nav className="navbar  bg-body-tertiary position-fixed top-0 container-fluid ">
            <div className="container">
                <Link to={'/'} className="navbar-brand">
                    <img src={Logo} alt="Logo" width="" height="20" className="d-inline-block align-text-top" />
                </Link>
                <div>
                    <ul className="nav  justify-content-end d-none d-md-flex ">
                        <li className="nav-item">
                           <Link  to={'/signup'} className="nav-link" >Signup</Link>
                        </li>
                        <li className="nav-item">
                        <Link  to={'/about'} className="nav-link" >About</Link>
                        </li>
                        <li className="nav-item">
                        <Link  to={'/products'} className="nav-link" >Products</Link>
                        </li>
                        <li className="nav-item">
                        <Link  to={'/pricing'} className="nav-link" >Pricing</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/support'}  className="nav-link" >Support</Link>
                        </li>

                    <li className='nav-item '>
                       <a className='nav-link'><MenuIcon sx={{ color: 'black', display:`block ` }} /></a> 
                    </li>
                    </ul>
                </div>



            </div>
        </nav>
    )
}