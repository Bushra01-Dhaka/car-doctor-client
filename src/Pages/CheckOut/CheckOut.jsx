import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const CheckOut = () => {
  const service = useLoaderData();
  const { _id,title, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;


    const booking = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price: price
    }
    console.log(booking);

    fetch(`http://localhost:5000/bookings`,{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId)
      {
        toast.success("Service booked successfully", {
          position: "top-right",
        });
      }
    })
   

  };

  return (
    <div>
      {/* <h1 className="text-4xl text-center font-bold">Book Service: {title}</h1> */}
      <div>
        <div
          className="hero min-h-[50vh] rounded"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/F0jJ4cF/checkout.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl md:text-5xl font-bold text-white">Book Service: <span className="text-[#FF3811]">{title}</span></h1>
            </div>
          </div>
        </div>
        
      </div>

      <form onSubmit={handleBookService} className="my-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              defaultValue={user?.displayName}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="number"
              name="amount"
              defaultValue={price}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            className="btn btn-primary my-6 bg-[#FF3811] text-white border-0 hover:bg-orange-600 btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
