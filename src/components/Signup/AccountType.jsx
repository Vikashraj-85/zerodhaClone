import React from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const AccountType = () => {
  return (
    <div className="container account-type mb-5">
      <h1 className='mb-md-5 ' >Explore different account types</h1>
      <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gy-5 account-type-cards ps-3 ps-sm-0">
        <a href='#'>
          <div className="col account-type-card">
            <h3>Individual Account</h3>
            <p>Invest in equity, mutual funds and derivatives</p>
            <div> <PersonPinIcon sx={{ color: '#387ED1', fontSize: '32px' }} /></div>
          </div>
        </a>
        <a href='#'>
          <div className="col account-type-card">
            <h3>HUF account</h3>
            <p>Make tax-efficient investments for your family</p>
            <div> <GroupsIcon sx={{ color: '#387ED1', fontSize: '32px' }} /></div>
          </div>
        </a>
        <a href='#'>
          <div className="col account-type-card">
            <h3>NRI account</h3>
            <p>Invest in equity, mutual funds, debentures, and more</p>
            <div> <PublicIcon sx={{ color: '#387ED1', fontSize: '32px' }} /></div>
          </div>
        </a>
        <a href='#'>
          <div className="col account-type-card">
            <h3>Minor Account</h3>
            <p>Teach your little ones about money & invest for their future with them</p>
            <div> <ChildCareIcon sx={{ color: '#387ED1', fontSize: '32px' }} /></div>
          </div>
        </a>
        <a href='#'>
          <div className="col account-type-card">
            <h3>Corporate / LLP/ Partnership</h3>
            <p>Manage your business surplus and investments easily</p>
            <div> <LocationCityIcon sx={{ color: '#387ED1', fontSize: '32px' }} /></div>
          </div>
        </a>


      </div>

    </div>
  )
}

export default AccountType
