import React from "react";
import apartment from "../Images/logos/apartment.png";
import affordable from "../Images/logos/affordable.png";
import lessee from "../Images/logos/lessee.png";

const Service = () => {
  return (
    <>
      <div style={{ background: " #f1f6f4" }}>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-12 col-sm-12 col-12 houseRent_header text-center">
              <p className="text-primary mb-0">Service</p>
              <h1 className="h1-responsive">
                We're an agency tailored to all <br />
                clients' needs that always delivers
              </h1>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-md-4 col-sm-6 col-12 mb-4">
              <div style={{ width: "310px" }} className="text-center">
                <img
                  style={{ width: "70px" }}
                  className="mb-3"
                  src={apartment}
                  alt="service-image"
                />
                <h6 className="text-dark mb-2">Wide Range of Properties</h6>
                <p className="text-gray">
                  With a robust selection of popular properties on hand, as well
                  as leading properties from experts.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-4">
              <div style={{ width: "310px" }} className="text-center">
                <img
                  style={{ width: "70px" }}
                  className="mb-3"
                  src={affordable}
                  alt="service-image"
                />
                <h6 className="text-dark mb-2">Financing Made Easy</h6>
                <p className="text-gray">
                  Our stress-free finance department that can find financial
                  solutions to save you money.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-4">
              <div style={{ width: "310px" }} className="text-center">
                <img
                  style={{ width: "70px" }}
                  className="mb-3"
                  src={lessee}
                  alt="service-image"
                />
                <h6 className="text-dark mb-2">Trusted by Thousands</h6>
                <p className="text-gray">
                  10 new offers every day. 350 offers on site, trusted by a
                  community of thousands of users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
