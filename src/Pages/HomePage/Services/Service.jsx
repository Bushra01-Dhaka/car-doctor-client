import { FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    <div className="mx-auto card card-compact w-full lg:w-[360px]  bg-base-100 shadow-xl">
      <figure>
        <img
        className="h-[200px] w-full p-5 mt-5"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title font-bold text-[#444] text-[25px]">{title}</h2>
        <div className="flex justify-between items-center mb-4 text-[20px]">
        <p className="text-[#FF3811] font-bold">Price: ${price}</p>
       <Link to={`/checkout/${_id}`}> <FaArrowRight className="text-[#FF3811] font-bold"></FaArrowRight></Link>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
    service : PropTypes.object.isRequired
}

export default Service;
