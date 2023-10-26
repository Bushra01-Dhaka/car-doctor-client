import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";
import Carousel from "./ImgCarousel";

const Team = () => {
  return (
    <div className="py-[100px]">
      <div className="text-center space-y-5">
        <h5 className="font-bold text-[#FF3811] text-[20px]">Team</h5>
        <h1 className="text-3xl lg:text-5xl font-bold">Meet Our Team</h1>
        <p className="md:max-w-[700px] mx-auto px-4 lg:px-0">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="container mx-auto mt-12">
        <div className="carousel rounded-box h-[80vh] w-[60wh] mx-auto ounded">
          <div className="carousel-item  w-1/2 px-4 ">
            {/* <img src={team1} className="w-full" /> */}
            <div className="mx-auto card card-compact w-full  bg-base-100 shadow-xl rounded">
              <figure className="rounded">
                <img className=" w-full p-5 mt-5 rounded" src={team1} />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title font-bold text-[#444] text-[25px]">
                  Car Engine Plug
                </h2>
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

          <div className="carousel-item w-1/2 px-4">
            {/* <img src={team2} className="w-full" /> */}
            <div className="mx-auto card card-compact w-full  bg-base-100 shadow-xl">
              <figure>
                <img className=" w-full p-5 mt-5 rounded" src={team2} />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title font-bold text-[#444] text-[25px]">
                  Car Engine Plug
                </h2>
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

          <div className="carousel-item w-1/2">
            {/* <img src={team3} className="w-full" /> */}
            <div className="mx-auto card card-compact w-full  bg-base-100 shadow-xl rounded">
              <figure className="rounded">
                <img className=" w-full p-5 mt-5 rounded" src={team3} />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title font-bold text-[#444] text-[25px]">
                  Car Engine Plug
                </h2>
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

          <div className="carousel-item w-1/2">
            {/* <img src={team1} className="w-full" /> */}
            <div className="mx-auto card card-compact w-full  bg-base-100 shadow-xl rounded">
              <figure className="rounded">
                <img className=" w-full p-5 mt-5 rounded" src={team1} />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title font-bold text-[#444] text-[25px]">
                  Car Engine Plug
                </h2>
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

          <div className="carousel-item w-1/2">
            {/* <img src={team2} className="w-full" /> */}
            <div className="mx-auto card card-compact w-full  bg-base-100 shadow-xl rounded">
              <figure className="rounded">
                <img className=" w-full p-5 mt-5 rounded" src={team2} />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title font-bold text-[#444] text-[25px]">
                  Car Engine Plug
                </h2>
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

          <div className="carousel-item w-1/2">
            {/* <img src={team3} className="w-full" /> */}
            <div className="mx-auto card card-compact w-full  bg-base-100 shadow-xl rounded">
              <figure className="rounded">
                <img className=" w-full p-5 mt-5 rounded" src={team3} />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title font-bold text-[#444] text-[25px]">
                  Car Engine Plug
                </h2>
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

        </div>
        
      </div>

      {/* <Carousel></Carousel>  */}
    </div>
  );
};

export default Team;
