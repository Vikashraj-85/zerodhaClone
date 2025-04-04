import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AdjustIcon from '@mui/icons-material/Adjust';
import PaidIcon from '@mui/icons-material/Paid';

const CreateTicket = () => {
    return (
        <div className="container mb-5 pb-5">
            <div className="row">
                <div className="col my-3 mb-5 support-ticket">To create a ticket, select a relevant topic</div>
            </div>
            <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gy-5 ">
                <div className="col support-ticket-card">
                    <h3><AddCircleOutlineIcon sx={{ fontSize: '19px' }} /> Account Opening</h3>
                    <ul>
                        <li><a href='#'> Resident individual</a></li>
                        <li> <a href='#'>Minor</a></li>
                        <li><a href='#'>Non Resident Indian (NRI)</a></li>
                        <li><a href='#'>Company, Partnership, HUF and LLP</a></li>
                        <li><a href='#'>Glossary</a></li>
                    </ul>
                </div>
                <div className="col support-ticket-card">
                    <h3><PersonIcon sx={{ fontSize: '19px' }} /> Your Zerodha Account</h3>
                    <ul>
                        <li><a href='#'> Resident individual</a></li>
                        <li> <a href='#'>Minor</a></li>
                        <li><a href='#'>Non Resident Indian (NRI)</a></li>
                        <li><a href='#'>Company, Partnership, HUF and LLP</a></li>
                        <li><a href='#'>Glossary</a></li>
                    </ul>
                </div>
                <div className="col support-ticket-card">
                    <h3><AlignVerticalBottomIcon sx={{ fontSize: '19px' }} /> Kite</h3>
                    <ul>
                        <li><a href='#'> Resident individual</a></li>
                        <li> <a href='#'>Minor</a></li>
                        <li><a href='#'>Non Resident Indian (NRI)</a></li>
                        <li><a href='#'>Company, Partnership, HUF and LLP</a></li>
                        <li><a href='#'>Glossary</a></li>
                    </ul>
                </div>
                <div className="col support-ticket-card">
                    <h3><CreditCardIcon sx={{ fontSize: '19px' }} /> Funds</h3>
                    <ul>
                        <li><a href='#'> Resident individual</a></li>
                        <li> <a href='#'>Minor</a></li>
                        <li><a href='#'>Non Resident Indian (NRI)</a></li>
                        <li><a href='#'>Company, Partnership, HUF and LLP</a></li>
                        <li><a href='#'>Glossary</a></li>
                    </ul>
                </div>
                <div className="col support-ticket-card">
                    <h3><AdjustIcon sx={{ fontSize: '19px' }} /> Console</h3>
                    <ul>
                        <li><a href='#'> Resident individual</a></li>
                        <li> <a href='#'>Minor</a></li>
                        <li><a href='#'>Non Resident Indian (NRI)</a></li>
                        <li><a href='#'>Company, Partnership, HUF and LLP</a></li>
                        <li><a href='#'>Glossary</a></li>
                    </ul>
                </div>
                <div className="col support-ticket-card">
                    <h3><PaidIcon sx={{ fontSize: '19px' }} /> Coin</h3>
                    <ul>
                        <li><a href='#'> Resident individual</a></li>
                        <li> <a href='#'>Minor</a></li>
                        <li><a href='#'>Non Resident Indian (NRI)</a></li>
                        <li><a href='#'>Company, Partnership, HUF and LLP</a></li>
                        <li><a href='#'>Glossary</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CreateTicket
