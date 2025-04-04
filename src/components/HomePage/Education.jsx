import education from '../../assets/images/education.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Education(){
    return(
       <div className="container my-5">
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-5 education-left mb-5">
            <img src={education} alt=""  width={432}/>
            </div>
            <div className="col-md-6  education-right">
                <h3 className='mb-4'>
                Free and open market education</h3>
                <div className="row mb-4">
                    <div className="col education-right-paras">
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href='#'>Varsity <ArrowForwardIcon sx={{ fontSize: '1rem' }} /></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col education-right-paras">
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href='#'>Varsity <ArrowForwardIcon sx={{ fontSize: '1rem' }} /></a>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}