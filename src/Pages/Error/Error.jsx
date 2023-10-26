import Navbar from '../../Shared/Navbar';
import error_img from '../../assets/images/error-img.jpg'

const Error = () => {
    return (
       <div>
        <Navbar></Navbar>
         <div className='flex justify-center items-center h-[80vh]'>
            <div>
                <img 
                className='h-[400px]'
                src={error_img} 
                alt="" />
            </div>
        </div>
       </div>
    );
};

export default Error;