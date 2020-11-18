import React from "react";
import { useHistory } from "react-router-dom";

const BookingForm = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/login");
  };
  return (
    <>
      <form className="px-4 py-5 bg-white">
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            className="form-control radius-0"
            id="exampleInputName"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            placeholder="Phone No"
            className="form-control radius-0"
            id="exampleInputPhone"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            placeholder="Email Address"
            className="form-control radius-0"
            id="exampleInputEmail1"
          />
        </div>
        <div class="form-group">
          <textarea
            className="form-control radius-0"
            placeholder="Massage"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          onClick={handleClick}
          className="btn btn-primary w-100 radius-0"
        >
          Request Booking
        </button>
      </form>
    </>
  );
};

export default BookingForm;
