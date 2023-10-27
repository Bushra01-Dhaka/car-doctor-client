import toast from "react-hot-toast";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const Booking = ({ booking, setBooking, bookings }) => {
  const { _id, customerName, email, date, img, service, price, status } = booking;
  console.log("status", {status})


  const handleDeleteBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#FF3811",
      cancelButtonColor: "#ED7D31",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Service has been deleted.", "success");

        fetch(`https://car-doctor-server-g8g2nf4kt-bushras-projects-96f4a913.vercel.app/bookings/${id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              toast.success("Deleted successfully");
            const remaining = bookings.filter(items => items._id !== id);
            setBooking(remaining);
            }
          });
      }
    });
  };

  

  const handleUpdateConfirm = id =>{
      fetch(`https://car-doctor-server-g8g2nf4kt-bushras-projects-96f4a913.vercel.app/bookings/${id}`,{
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({status: 'confirm'})
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount > 0)
        {
             //update state 
             console.log("status", {status})
             const remain = bookings.filter(book => book._id !== id);
             const updating = bookings.find(book => book._id == id);
             updating.status = 'confirm';
             const newUpdatedBookings = [updating, ...remain];
             setBooking(newUpdatedBookings);
        }
      })
  }


  return (
    <tr>
      <th>
        <button
          onClick={() => handleDeleteBtn(_id)}
          className="btn btn-xs btn-circle bg-[#444] text-white hover:bg-[#FF3811]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squire rounded w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
            <div className="text-sm opacity-50">{customerName}</div>
          </div>
        </div>
      </td>
      <td>${price}</td>
      <td>{date}</td>
      <td>{email}</td>
      <th>
        {/* <button className="btn btn-ghost btn-xs">details</button> */}
        {
          status === 'confirm' ?  
        <span className="font-bold text-[#FF3811]">Confirmed</span>
          : 
          <button onClick={() => handleUpdateConfirm(_id)} className="btn hover:bg-[#FF3811] hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
           Please Confirm
        </button>

        }
       
      </th>
    </tr>
  );
};

Booking.propTypes = {
  booking: PropTypes.object.isRequired,
  setBooking: PropTypes.func,
  bookings: PropTypes.array
}

export default Booking;
