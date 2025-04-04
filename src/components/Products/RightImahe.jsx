import React from 'react'

const RightImahe = ({mainImg, title,paragraph, link1,link2,appstore,palystore}) => {
  return (
    <div className="container mb-2 ">
      <div className="row d-flex justify-content-between align-items-center gap-5">
        <div className="col-md-6   left-image show-in-mobile">
          <img src={mainImg} alt="" />
        </div>
        <div className="col-md-5  leftImg-text  ">
          <h3>{title}</h3>
          <p className='text-muted'> {paragraph} </p>
          <div className='row left-img-links my-5'>
            <div className="col-5 "><a href='#'>{link1}</a></div>
            <div className="col-md-4 col-5"><a href='#' > {link2} </a></div>
          </div>
          <div className="row">
            <div className="col-5">
              <img src={palystore} alt="" width={151} />
            </div>
            <div className="col-4"><img src={appstore} alt="" width={151} /></div>
          </div>
        </div>
        <div className="col-md-6  left-image show-in-window ">
          <img src={mainImg} alt="" width={587}/>
        </div>
      </div>
    </div>
  )
}

export default RightImahe
