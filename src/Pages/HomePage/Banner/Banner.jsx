import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img5 from '../../../assets/images/banner/5.jpg'


const Banner = () => {
  return (
    <div className="carousel w-full h-[500px]">


      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img5}
          className="w-full rounded-xl"
        />

         <div className="absolute rounded-xl h-full flex p-4 lg:p-0  lg:pl-[100px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
            <div className='space-y-6 my-auto w-full lg:w-1/2'>
            <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">Affordable Price For Car Servicing</h2>
             </div>
             <div>
                <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
             </div>
             <div>
             <button className="btn btn-active  border-0 bg-[#FF3811] text-white mr-5 rounded hover:bg-orange-500 hover:[#FF3811]">Discover More</button>
             <button className="btn btn-outline  border-[#FF3811] text-white rounded hover:bg-white hover:text-[#FF3811]">Latest Projects</button>
             </div>
            </div>

        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5 text-[#FF3811] border-0">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#FF3811] text-white border-0">
            ❯
          </a>
        </div>
      </div>


      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full rounded-xl"
        />

        <div className="absolute rounded-xl h-full flex p-4 lg:p-0  lg:pl-[100px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
            <div className='space-y-6 my-auto w-full lg:w-1/2'>
            <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">Top-Notch Car Repairs and Maintenance Services</h2>
             </div>
             <div>
                <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
             </div>
             <div>
             <button className="btn btn-active  border-0 bg-[#FF3811] text-white mr-5 rounded hover:bg-orange-500 hover:[#FF3811]">Discover More</button>
             <button className="btn btn-outline  border-[#FF3811] text-white rounded hover:bg-white hover:text-[#FF3811]">Latest Projects</button>
             </div>
            </div>

        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5 text-[#FF3811] border-0">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#FF3811] text-white border-0">
            ❯
          </a>
        </div>
      </div>


      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img3}
          className="w-full rounded-xl"
        />

       <div className="absolute rounded-xl h-full flex p-4 lg:p-0 lg:pl-[100px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
            <div className='space-y-6 my-auto w-full lg:w-1/2'>
            <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">Trustworthy Mechanics Provide Quality Automotive Care</h2>
             </div>
             <div>
                <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
             </div>
             <div>
             <button className="btn btn-active  border-0 bg-[#FF3811] text-white mr-5 rounded hover:bg-orange-500 hover:[#FF3811]">Discover More</button>
             <button className="btn btn-outline  border-[#FF3811] text-white rounded hover:bg-white hover:text-[#FF3811]">Latest Projects</button>
             </div>
            </div>

        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5 text-[#FF3811] border-0">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-[#FF3811] text-white border-0">
            ❯
          </a>
        </div>
      </div>


      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full rounded-xl"
        />

       <div className="absolute rounded-xl h-full flex p-4 lg:p-0 lg:pl-[100px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
            <div className='space-y-6 my-auto w-full lg:w-1/2'>
            <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">Car {`Doctor's`} Service: Your {`Vehicle's`} Best Friend</h2>
             </div>
             <div>
                <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
             </div>
             <div>
             <button className="btn btn-active  border-0 bg-[#FF3811] text-white mr-5 rounded hover:bg-orange-500 hover:[#FF3811]">Discover More</button>
             <button className="btn btn-outline  border-[#FF3811] text-white rounded hover:bg-white hover:text-[#FF3811]">Latest Projects</button>
             </div>
            </div>

        </div>

         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5 text-[#FF3811] border-0">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-[#FF3811] text-white border-0">
            ❯
          </a>
        </div>
      </div>


    </div>
  );
};

export default Banner;
