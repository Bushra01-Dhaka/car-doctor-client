import cover_img from "../../../assets/images/about_us/person.jpg";
import cover_img1 from "../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="hero min-h-screen py-[100px]">
      <div className="hero-content flex-col md:flex-row">

        <div className="mb-20 md:mb-0 w-full  lg:w-1/2 ">
        <div className="relative">
          <img
            src={cover_img}
            className="w-[250px] h-[300px] lg:w-[480px] lg:h-[470px] rounded-lg shadow-2xl"
          />
          <img
            src={cover_img1}
            className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] rounded absolute left-[120px] lg:left-[300px] bottom-[-80px] p-2 bg-white"
            alt=""
          />
        </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h5 className="font-bold text-[#FF3811] text-[20px]">About Us</h5>
          <h1 className="text-3xl lg:text-5xl font-bold">
            We are qualified <br /> & of experience <br />in this field
          </h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't`} look even slightly believable. 
          </p>
          <p className="py-3">
          the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't`} look even slightly believable. 
          </p>
          <Link><button className="btn mt-4 btn-active  border-0 bg-[#FF3811] text-white mr-5 rounded hover:bg-orange-500 hover:[#FF3811]" >Get More Info</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
