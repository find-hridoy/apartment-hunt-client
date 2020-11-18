import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner d-flex align-items-center">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="banner_area">
              <h1 className="mb-4">FIND YOUR HOUSE RENT</h1>
              <form className="d-flex">
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control text-secondary mr-sm-2 "
                />
                <button className="btn btn-primary" style={{ width: "150px" }}>
                  Find Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
