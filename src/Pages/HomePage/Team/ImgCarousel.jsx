import { useState } from "react";
import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";
import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [team1, team2, team3, team1, team2, team3, team2];

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="carousel rounded-box">
        <button onClick={goToPrevious}>❮</button>
        <div className="carousel-item w-2/3 mx-auto px-4">
          {/* <img
            src={images[currentIndex]}
            className="w-full"
            alt={`Image ${currentIndex + 1}`}
          /> */}
           <div className="mx-auto card card-compact w-full lg:w-[360px]  bg-base-100 shadow-xl">
      <figure>
        <img
        className=" w-full p-5 mt-5"
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title font-bold text-[#444] text-[25px]">Car Engine Plug</h2>
        <div className="flex justify-between items-center mb-4 text-[20px]">
        <p className="text-[#FF3811] font-bold">Engine Expert</p>
        <div className="text-2xl flex space-x-4">
              <FaTwitter></FaTwitter>
              <FaGoogle></FaGoogle>
              <FaInstagram></FaInstagram>
            </div>
        
        </div>
      </div>
    </div>
        </div>
        {/* <div className="carousel-item w-1/2 ">
          <div className="pl-8 space-y-4">
            <h2 className="text-5xl font-bold">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="text-2xl flex space-x-4">
              <FaTwitter></FaTwitter>
              <FaGoogle></FaGoogle>
              <FaInstagram></FaInstagram>
            </div>
          </div>
        </div> */}
        <button onClick={goToNext}>❯</button>
      </div>
    </div>
  );
}

export default Carousel;
