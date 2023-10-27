import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Booking from "./Booking";


const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBooking] = useState([]);
  const url = `https://car-doctor-server-g8g2nf4kt-bushras-projects-96f4a913.vercel.app/bookings?email=${user?.email}`
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooking(data);
      });
  }, [url]);

 

  return (
    <div>
      <div
        className="hero min-h-[50vh] rounded"
        style={{
          backgroundImage: "url(https://i.ibb.co/F0jJ4cF/checkout.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold text-white">
              {" "}
              Booking <span className="text-[#FF3811]">Details</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-gray-100 text-black rounded">
              <tr>
                <th>
                </th>
                <th>Selected Services Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
             
             {
                bookings.map(booking => <Booking 
                    key={booking._id}
                     booking={booking} 
                     setBooking={setBooking}
                     bookings={bookings}
                     ></Booking>)
             }
            

            </tbody>
         

          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
