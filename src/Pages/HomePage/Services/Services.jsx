import { useLoaderData } from "react-router-dom";
import Service from "./Service";


const Services = () => {
    
    const services = useLoaderData();
    console.log(services);
  return (

    <div className="py-[100px]">
      <div className="text-center space-y-5">
        <h5 className="font-bold text-[#FF3811] text-[20px]">Services  {services.length}</h5>
        <h1 className="text-3xl lg:text-5xl font-bold">
        Our Service Area
        </h1>
        <p className="md:max-w-[700px] mx-auto px-4 lg:px-0">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      </div>

      <div className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0 ">
        {
            services.map(service => <Service key={service._id} service={service}></Service>)
        }
          
      </div>
    </div>
  );
};

export default Services;
