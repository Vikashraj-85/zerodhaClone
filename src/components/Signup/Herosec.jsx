import React, { useState } from 'react'
import signupImg from '../../assets/images/account_open.svg'
import axios from 'axios';


const Herosec = () => {

  
    const [singupdata, setsingupdata] = useState({
        username: '',
        password: '',
    })

    const handleOnChange = (e) => {
        setsingupdata({ ...singupdata, [e.target.name]: e.target.value });

    }

    const handleOnClick = () => {
        axios.post('https://zerodhadashboarbackend.onrender.com/user/signin', singupdata)
            .then(res => {
                console.log(res)
                window.location.href = "https://zerodhadashboard-pk35.onrender.com/";
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container '>
            <div className="row mt-5 pt-5">
                <div className="col my-5  pt-3 text-sm-center signup-hero-sec-text show-in-window ">
                    <h1 className='mb-5'>Open a free demat and trading account online</h1>
                    <p>Start investing brokerage free and join a community of 1.5+ crore investors and traders</p>
                </div>
            </div>
            <div className="row d-flex align-items-center mt-5 ">
                <div className="col-md-6 signup-from-left">
                    <img src={signupImg} alt="" />
                </div>
                <div className="row show-in-mobile d-none">
                    <div className="col my-4  pt-3 text-sm-center signup-hero-sec-text ">
                        <h1 className='text-center'>Open a free demat and trading account online</h1>

                    </div>
                </div>
                <div className="col-md-6 signup-from-right px-5 ">
                    <h2>Signup now</h2>
                    <p>Or track your existing application</p>
                    <div className="input-group border p-2">
                        <input type="text" placeholder="Enter your username" required className='border' name='username' value={singupdata.username} onChange={(e) => { handleOnChange(e) }} />
                        <input type="text" placeholder="Enter your password " required className='my-3 border' name='password' value={singupdata.password} onChange={(e) => { handleOnChange(e) }} />
                        <button className='signup-btn' onClick={handleOnClick}>SignUp</button>
                    </div>
                    <h3>By proceeding, you agree to the Zerodha <a href='#'>terms</a> & <a href='#'>privacy policy</a></h3>
                </div>
            </div>

        </div>
    )
}

export default Herosec;
