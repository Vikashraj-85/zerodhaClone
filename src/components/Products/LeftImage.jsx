import React from 'react'



const LeftImage = ({mainImg, title,paragraph, link1,link2,appStore,playstore}) => {
  return (<>
 
    <div className="container my-md-5  ">
      <div className="row my-md-5  d-flex justify-content-between align-items-center gap-5">
        <div className="col-md-6 left-image"> 
          <img src={mainImg} alt="" />
        </div>
        <div className="col-md-5 leftImg-text">
          <h3>{title}</h3>
          <p className='text-muted'>{paragraph}</p>
          <div className='row left-img-links my-4'>
            <div className="col-5 "><a href='#'>{link1}</a></div>
            <div className="col-md-4 col-5"><a href='#' >{link2}</a></div>            
          </div>
          <div className="row">
            <div className="col-5">
              <img src={playstore} alt="" width={151}/>
            </div>
            <div className="col-4"><img src={appStore} alt="" width={135}/></div>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default LeftImage
