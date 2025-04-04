import React from 'react'
import nikhilImg from '../../assets/images/Nikhil-kamath.jpg'
import kailashImg from '../../assets/images/kailash.jpg'
import karthikImg from '../../assets/images/karthik.jpg'
import hananImg from '../../assets/images/Hanan.jpg'
import seemaImg from '../../assets/images/Seema.jpg'
import venu from '../../assets/images/Venu.jpg'
import Austin from '../../assets/images/Austin.jpg'

const Peoples = () => {
  return (
    <div className="container">
       <div className="row my-md-5  py-4">
          <div className="col-lg-4 about-peoples">
              <img src={nikhilImg} alt="" />
              <h4>Nikhil Kamath</h4>
              <p>Co-founder & CFO</p>
          </div>
          <div className="col-lg-4 about-peoples">
              <img src={kailashImg} alt="" />
              <h4>Dr. Kailash Nadh</h4>
              <p>CTO</p>
          </div>
          <div className="col-lg-4 about-peoples">
              <img src={venu} alt="" />
              <h4>
              Venu Madhav</h4>
              <p>COO</p>
          </div>
        </div>
        <div className="row mb-5 pb-md-5">
          <div className="col-lg-4 about-peoples">
              <img src={hananImg} alt="" />
              <h4>Hanan Delvi</h4>
              <p>CCO</p>
          </div>
          <div className="col-lg-4 about-peoples">
              <img src={seemaImg} alt="" />
              <h4>Seema Patil</h4>
              <p>Director</p>
          </div>
          <div className="col-lg-4 about-peoples">
              <img src={karthikImg} alt="" />
              <h4>Karthik Rangappa</h4>
              <p>Chief Education</p>
          </div>
        </div>
        <div className="row mb-5">
        <div className="col-lg-4 about-peoples">
              <img src={Austin} alt="" />
              <h4>Karthik Rangappa</h4>
              <p>Chief Education</p>
          </div>
        </div>
    </div>
  )
}

export default Peoples
