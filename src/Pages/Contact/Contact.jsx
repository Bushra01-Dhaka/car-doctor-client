import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import ContactStat from "../HomePage/ContactStat/ContactStat";

const Contact = () => {
  return (
    <div>
      <div
        className="hero min-h-[80vh] rounded"
        style={{
          backgroundImage: "url(https://i.ibb.co/F0jJ4cF/checkout.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-3xl md:text-4xl font-bold text-white">
             Would you like to set an Appointment with our consultancy team?
            </h1>
           <Link href="mailto:humayraanjum87@gmail.com"><button className="btn  btn-block bg-[#FF3811] text-white border-0 hover:bg-orange-500"> <AiOutlineMail className="text-lg"></AiOutlineMail> Send us mail</button></Link>
          </div>
        </div>
      </div>

      <ContactStat></ContactStat>
    </div>
  );
};

export default Contact;
